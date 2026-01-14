import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'openlib_wishlist_v1';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private _favorites = new BehaviorSubject<any[]>(this.readFromStorage());
  favorites$ = this._favorites.asObservable();

  // panel visibility
  private _panel = new BehaviorSubject<boolean>(false);
  panel$ = this._panel.asObservable();

  constructor() {}

  private readFromStorage(): any[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private writeToStorage(list: any[]) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch {}
  }

  getFavorites(): any[] { return this._favorites.getValue(); }

  isFavorite(key: string | undefined): boolean {
    if (!key) return false;
    return this.getFavorites().some(b => b.key === key);
  }

  add(book: any) {
    if (!book || !book.key) return;
    const list = this.getFavorites();
    if (!list.some(b => b.key === book.key)) {
      const next = [ ...(list || []), { key: book.key, title: book.title, cover_id: book.cover_id } ];
      this._favorites.next(next);
      this.writeToStorage(next);
    }
  }

  removeByKey(key?: string) {
    if (!key) return;
    const list = this.getFavorites().filter(b => b.key !== key);
    this._favorites.next(list);
    this.writeToStorage(list);
  }

  toggle(book: any) {
    if (!book || !book.key) return;
    if (this.isFavorite(book.key)) this.removeByKey(book.key);
    else this.add(book);
  }

  openPanel() { this._panel.next(true); }
  closePanel() { this._panel.next(false); }
  togglePanel() { this._panel.next(!this._panel.getValue()); }
}
