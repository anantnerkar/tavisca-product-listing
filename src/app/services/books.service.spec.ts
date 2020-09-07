import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BooksService } from './books.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

describe('BooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BooksService],
    });
  });
  it('should be created', () => {
    const service1 = TestBed.inject(BooksService);
    expect(service1).toBeTruthy();
  });
});
