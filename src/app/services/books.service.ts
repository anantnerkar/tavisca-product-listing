import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../_models';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  readonly BASE_URL = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  public getAllBooks(): Observable<Book[]> {
    const getAllBooksUrl = encodeURI('books');
    return this.http
      .get<Book[]>(`${this.BASE_URL + getAllBooksUrl}`)
      .pipe(retry(1), catchError(this.errorCatcher));
  }

  public createBook(book: Book): Observable<Book> {
    const createUrl = encodeURI('books');
    return this.http
      .post<Book>(`${this.BASE_URL + createUrl}`, book, this.httpOptions)
      .pipe(catchError(this.errorCatcher));
  }

  public updateBook(updatedBook: Book): Observable<Book> {
    const updateBookUrl = encodeURI(`books/${updatedBook.id}`);
    return this.http
      .patch<Book>(
        `${this.BASE_URL + updateBookUrl}`,
        updatedBook,
        this.httpOptions
      )
      .pipe(catchError(this.errorCatcher));
  }

  public getByBookId(id: number): Observable<Book> {
    return this.http
      .get<Book>(this.BASE_URL + 'books/' + id)
      .pipe(catchError(this.errorCatcher));
  }

  public deleteBook(id: number): Observable<Book> {
    const deleteBookUrl = encodeURI(`books/${id}`);
    return this.http
      .delete<Book>(`${this.BASE_URL + deleteBookUrl}`)
      .pipe(catchError(this.errorCatcher));
  }

  errorCatcher(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
