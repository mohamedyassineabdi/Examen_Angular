import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book';
import { Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  standalone: true,
  selector: 'app-book-details',
  templateUrl: './book-details.html',
  styleUrls: ['./book-details.css'],
  imports: [CommonModule]
})
export class BookDetails implements OnInit {
  @Input() book?: any;
  @Output() close = new EventEmitter<void>();
  bookId?: string;
  descriptionText: string | null = null;
  authors: string[] = [];
  subjects: string[] = [];
  editionCount: number | null = null;
  private detailsFetched = false;
  displayYear: number | string | null = null;

  constructor(@Optional() private route: ActivatedRoute | null, private bookService: BookService, private router: Router, private wishlist: WishlistService) {}

  ngOnInit(): void {
    // If a `book` was passed in via Input (modal mode), use it directly.
    if (this.book) {
      this.processBook(this.book);
      return;
    }

    // Otherwise try to read the route param and fetch details (route mode).
    this.bookId = this.route?.snapshot?.paramMap.get('id') ?? undefined;
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (data) => {
          this.processBook(data);
        },
        error: (err) => {
          console.error('Failed to load book details', err);
          this.book = null;
          this.descriptionText = null;
        }
      });
    }
  }

  processBook(data: any) {
    this.book = data;
    // authors can appear in multiple shapes depending on endpoint
    const rawAuthors = data?.authors ?? [];
    this.authors = rawAuthors.map((a: any) => a.name || a.author?.name || a.author?.key || null).filter(Boolean);
    // subjects may be an array of strings
    this.subjects = Array.isArray(data?.subjects) ? data.subjects.slice(0, 10) : [];
    this.editionCount = data?.edition_count ?? null;
    const desc = data?.description;
    if (!desc) {
      this.descriptionText = null;
    } else if (typeof desc === 'string') {
      this.descriptionText = desc;
    } else if (typeof desc === 'object') {
      this.descriptionText = desc.value ?? desc.description ?? null;
    } else {
      this.descriptionText = null;
    }

    // compute display year from available fields
    this.displayYear = this.computeDisplayYear(this.book);

    // normalize authors we already have (may contain keys)
    this.authors = (this.authors || []).map(a => this.normalizeAuthorString(a));

    // If description or authors are missing, try fetching full work details using the work id
    if ((!this.descriptionText || this.authors.length === 0) && !this.detailsFetched) {
      const key = data?.key ?? this.book?.key;
      const id = key ? String(key).split('/').pop() : null;
      if (id) {
        this.detailsFetched = true;
        this.bookService.getBookById(id).subscribe({
          next: (full) => this.mergeDetails(full),
          error: () => { /* ignore fetch errors silently */ }
        });
      }
    }
  }

  private computeDisplayYear(payload: any): number | string | null {
    if (!payload) return null;
    const years: number[] = [];
    // prefer numeric first_publish_year
    if (payload.first_publish_year && !isNaN(Number(payload.first_publish_year))) {
      years.push(Number(payload.first_publish_year));
    }
    // parse first_publish_date like '1994' or '1994-01-01' or 'Jan 1994'
    const fpd = payload.first_publish_date ?? payload.created?.value ?? null;
    if (fpd && typeof fpd === 'string') {
      const m = fpd.match(/(\d{4})/);
      if (m) years.push(Number(m[1]));
    }
    // edition_count sometimes contains year? skip
    if (years.length === 0) return null;
    // choose the earliest year as the most likely original publication
    return Math.min(...years);
  }

  private mergeDetails(full: any) {
    if (!full) return;
    // merge description if missing
    if (!this.descriptionText) {
      const desc = full?.description;
      if (desc) {
        if (typeof desc === 'string') this.descriptionText = desc;
        else if (typeof desc === 'object') this.descriptionText = desc.value ?? desc.description ?? null;
      }
    }
    // merge authors (append any new names)
    const rawAuthors = full?.authors ?? [];
    const fetched = rawAuthors.map((a: any) => a.name || a.author?.name || a.author?.key || null).filter(Boolean);
    const all = [...this.authors, ...fetched].filter(Boolean);
    this.authors = Array.from(new Set(all));
    // merge subjects
    if ((!this.subjects || this.subjects.length === 0) && Array.isArray(full?.subjects)) {
      this.subjects = full.subjects.slice(0, 10);
    }
    // edition count
    if (!this.editionCount && full?.edition_count) {
      this.editionCount = full.edition_count;
    }
    // also update book reference with fuller payload for cover ids etc.
    this.book = { ...this.book, ...full };
    // recompute display year with merged details (prefer earliest)
    this.displayYear = this.computeDisplayYear(this.book);

    // if any author entries look like keys (e.g. '/authors/OL...'), fetch their names
    const keys = (this.authors || [])
      .map(a => typeof a === 'string' ? a : '')
      .filter(s => /authors?\//i.test(s));
    if (keys.length > 0) {
      const calls = keys.map(k => {
        const id = String(k).split('/').pop();
        return id ? this.bookService.getAuthorByKey(id).pipe(catchError(() => of(null))) : of(null);
      });
      forkJoin(calls).subscribe((results: any[]) => {
        const fetchedNames = results.map(r => r?.name).filter(Boolean).map(n => this.normalizeAuthorString(n));
        // merge and dedupe
        const combined = [...(this.authors || []).filter(s => !/authors?\//i.test(String(s))), ...fetchedNames];
        this.authors = Array.from(new Set(combined.map(c => this.normalizeAuthorString(c))));
      });
    } else {
      // normalize existing names to first + last
      this.authors = Array.from(new Set((this.authors || []).map(a => this.normalizeAuthorString(a))));
    }
  }

  private normalizeAuthorString(input: any): string {
    if (!input) return '';
    const s = String(input).trim();
    // if it's a key like '/authors/OL2623461A' return as-is marker
    if (/^\/?authors?\//i.test(s) || /^OL\w+/i.test(s)) return s;
    // if 'Last, First' format
    if (/,/.test(s)) {
      const parts = s.split(',').map(p => p.trim()).filter(Boolean);
      if (parts.length >= 2) return `${parts[1].split(' ')[0]} ${parts[0].split(' ')[0]}`;
    }
    // default: take first and last token
    const toks = s.split(/\s+/).filter(Boolean);
    if (toks.length === 1) return toks[0];
    return `${toks[0]} ${toks[toks.length-1]}`;
  }

  onClose() {
    this.close.emit();
    // if opened via route (has an id param), navigate back to root
    const routeId = this.route?.snapshot?.paramMap.get('id');
    if (routeId) {
      this.router.navigate(['/']);
    }
  }

  isFav() { return this.wishlist.isFavorite(this.book?.key); }

  toggleFav() { this.wishlist.toggle(this.book); }
}
