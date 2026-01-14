import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book';
import { BookFilterService } from '../../services/book-filter.service';
import { WishlistService } from '../../services/wishlist.service';
import { Subscription } from 'rxjs';
import { BookDetails } from '../book-details/book-details';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
  imports: [CommonModule, RouterModule, BookDetails]
})
export class BookList implements OnInit, OnDestroy {
  booksList: Book[] = [];  // full list
  displayedBooks: Book[] = []; // filtered
  private subs: Subscription[] = [];
  private currentFilterTitle: string | null = null;
  private currentFilterYear: number | null = null;
  selectedBook: Book | any = null;
  constructor(private bookService: BookService, private filterService: BookFilterService, private wishlist: WishlistService) { }

  openDetails(book: Book | any) {
    this.selectedBook = book;
  }

  closeDetails() {
    this.selectedBook = null;
  }

  toggleFavorite(book: Book | any) {
    this.wishlist.toggle(book);
  }

  isFav(book: Book | any) {
    return this.wishlist.isFavorite(book?.key);
  }

  ngOnInit(): void {
    const s = this.bookService.getBooksList().subscribe({
      next: (data) => {
        this.booksList = (data?.works ?? []) as Book[];
        this.applyFilters();
      },
      error: (err) => {
        console.error('Failed to load books', err);
        this.booksList = [];
        this.displayedBooks = [];
      }
    });
    this.subs.push(s);

    this.subs.push(this.filterService.title$.subscribe((t: string | null) => { this.currentFilterTitle = t; this.applyFilters(); }));
    this.subs.push(this.filterService.year$.subscribe((y: number | null) => { this.currentFilterYear = y; this.applyFilters(); }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  private applyFilters() {
    // read current filter values synchronously
    const title = this.currentFilterTitle;
    const year = this.currentFilterYear;

    this.displayedBooks = this.booksList.filter(b => {
      let ok = true;
      if (title) {
        ok = ok && (b.title || '').toLowerCase().includes(title.toLowerCase());
      }
      if (year) {
        ok = ok && (b.first_publish_year === year || String(b.first_publish_year) === String(year));
      }
      return ok;
    });
  }
}
