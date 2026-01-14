import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookList } from './book-list';

describe('BookList', () => {
  let component: BookList;
  let fixture: ComponentFixture<BookList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookList, HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
