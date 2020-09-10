import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CreateBookComponent } from '../add-book/add-book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { Book } from '../_models';
import { BooksService } from './books.service';


const dummyBooksData: Book[] = [
  {
    "book": "The Adventures of Huckleberry Finn",
    "description": "This is book of war and peace",
    "author": "Mark Twain",
    "category": "Novel",
    "id": 2
  },
  {
    "book": "An American Tragedy",
    "description": "This is book of war and peace",
    "author": "Theodore Dreiser",
    "category": "Novel",
    "id": 3
  },
  {
    "book": "An idealist view of life",
    "description": "This is book of war and peace",
    "author": "Dr. S. Radhakrishnan",
    "category": "Novel",
    "id": 4
  }
];

describe('BooksService', () => {
  let booksService: BooksService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService]
    });
    this.service = TestBed.inject(BooksService);
  });

  beforeEach(inject(
    [BooksService, HttpTestingController],
    (serviceInstance, httpMockInstance) => {
      booksService = serviceInstance;
      httpMock = httpMockInstance;
    }
  ));

  it('should be created', () => {
    const service1 = TestBed.inject(BooksService);
    expect(service1).toBeTruthy();
  });

  it('getById: should return a book by given id', () => {
    this.service.getByBookId(4).subscribe((book) => {
      expect(book.author).toBe('Dr. S. Radhakrishnan');
    });
    const req = httpMock.expectOne('http://localhost:3000/books/4');
    req.flush(dummyBooksData);
    httpMock.verify();
  });

  it('getAllBooks: should return a list', () => {
    this.service.getAllBooks().subscribe((books) => {
      expect(books).toBeDefined();
      expect(books.length).toBe(3);
      const req = httpMock.expectOne('http://localhost:3000/books');
      req.flush(dummyBooksData);
      httpMock.verify();
    });
  });

  it('delete: should return an empty object', () => {
    this.service.deleteBook().subscribe((books) => {
      expect(books).toBeDefined();
      const req = httpMock.expectOne('http://localhost:3000/books');
      req.flush(dummyBooksData);
      httpMock.verify();
    });
  });

  it('create: should create a book and return the created book', () => {
    const bookTobeCreated = {
      book: '5 points someone',
      description: 'new books description',
      author: 'Chetan Bhagat',
      category: 'Novel',
    };

    this.service.createBook(bookTobeCreated).subscribe((books) => {
      expect(books).toBeDefined();
      expect(books.length).toBe(1);
      const req = httpMock.expectOne('http://localhost:3000/books');
      req.flush(dummyBooksData);
      httpMock.verify();
    });
  });

  it('update: should update a book and return the updated book', () => {
    const bookTobeCreated = {
      book: '5 points someone',
      description: 'new books description',
      author: 'Chetan Bhagat',
      category: 'Novel',
    };

    this.service.updateBook(bookTobeCreated).subscribe((books) => {
      expect(books).toBeDefined();
      expect(books.length).toBe(1);
      const req = httpMock.expectOne('http://localhost:3000/books');
      req.flush(dummyBooksData);
      httpMock.verify();
    });
  });
});