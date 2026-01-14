import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBar } from "./components/head-bar/head-bar";
import { SearchBar } from "./components/search-bar/search-bar";
import { RouterOutlet } from '@angular/router';
import { BookFilterService } from './services/book-filter.service';
import { Subscription } from 'rxjs';
import { WishlistPanel } from './components/wishlist-panel/wishlist-panel';
import { WishlistService } from './services/wishlist.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule, HeadBar, SearchBar, RouterOutlet, WishlistPanel]
})
export class AppComponent implements OnDestroy {
  title = "la bibliothèque de l’IHEC";
  filterTitle?: string | null;
  filterYear?: number | null;
  private subs: Subscription[] = [];

  showWishlistPanel = false;
  constructor(private filterService: BookFilterService, public wishlist: WishlistService) {
    this.subs.push(this.filterService.title$.subscribe((t) => this.filterTitle = t));
    this.subs.push(this.filterService.year$.subscribe((y) => this.filterYear = y));
    this.subs.push(this.wishlist.panel$.subscribe(v => this.showWishlistPanel = v));
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
