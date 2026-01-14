import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookFilterService {
  private titleSubject = new BehaviorSubject<string | null>(null);
  private yearSubject = new BehaviorSubject<number | null>(null);

  readonly title$ = this.titleSubject.asObservable();
  readonly year$ = this.yearSubject.asObservable();

  setTitle(title: string | null) {
    this.titleSubject.next(title && title.trim() !== '' ? title : null);
  }

  setYear(year: number | null) {
    this.yearSubject.next(year ?? null);
  }
}
