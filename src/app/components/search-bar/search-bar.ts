import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BookFilterService } from '../../services/book-filter.service';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
  imports: [CommonModule, FormsModule]
})
export class SearchBar {
  title = '';
  year: number | null = null;

  private titleInput$ = new Subject<string>();
  private yearInput$ = new Subject<number | null>();

  constructor(private filterService: BookFilterService) {
    this.titleInput$.pipe(debounceTime(300)).subscribe((t) => this.filterService.setTitle(t || null));
    this.yearInput$.pipe(debounceTime(300)).subscribe((y) => this.filterService.setYear(y ?? null));
  }

  onTitleInput(value: string) {
    this.titleInput$.next(value);
  }

  onYearInput(value: string) {
    const n = value === '' ? null : Number(value);
    this.yearInput$.next(n);
  }

  // immediate actions for the buttons
  searchTitleNow() {
    this.filterService.setTitle(this.title || null);
  }

  searchYearNow() {
    this.filterService.setYear(this.year ?? null);
  }
}
