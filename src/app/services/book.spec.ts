import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books from the API', () => {
    const mockBooks = { works: [{ title: 'Angular Basics', key: '/works/OL12345W' }] };

    service.getBooks().subscribe(books => {
      expect(books.works.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne('https://openlibrary.org/subjects/computers.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
