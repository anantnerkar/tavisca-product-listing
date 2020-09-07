import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../_models';
import { Observable } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Store } from '@ngrx/store';
import { AppState, bookState } from '../store/app.state';
import { GetBooks, DeleteBooks } from '../book-store/actions/book.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  bookList: Book[];
  createBook: boolean;
  @Input() userAuthenticated: boolean;
  displayMessage: string;
  bookToUpdate: Book;
  getState: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.getState = this.store.select(bookState);
  }

  ngOnInit(): void {
    this.loadAllBooks();
    this.createBook = false;
    this.store.subscribe((data) => {
      this.bookList = data.book.book;
    });
  }

  private loadAllBooks(): void {
    this.store.dispatch(new GetBooks());
  }

  public deleteBook(id: number): void {
    this.store.dispatch(new DeleteBooks(id));
    this.store.dispatch(new GetBooks());
  }

  public bookCreated(event): void {
    this.displayMessage = event;
    this.loadAllBooks();
  }

  public bookNotCreated(event): void {
    this.displayMessage = event;
  }

  public createBookForm(): void {
    this.router.navigateByUrl('create');
  }

  public updateBook(book: Book): void {
    this.router.navigateByUrl('update/' + book.id);
  }

  public closeNotification(): void {
    this.displayMessage = undefined;
  }
}
