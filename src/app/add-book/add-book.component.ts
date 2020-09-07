import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, bookState } from '../store/app.state';
import {
  AddBook,
  GetBooks,
  UpdateBook,
} from '../book-store/actions/book.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  @Input() existingBook?: Book;
  displayUpdate: boolean;
  newBook: Book;
  submitted: false;
  createBookForm: FormGroup;
  getState: Observable<any>;
  @Output() booksCreatedSuccessfully = new EventEmitter<string>();
  @Output() errorInBookCreation = new EventEmitter<string>();
  bookId: number;
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private booksService: BooksService
  ) {
    this.getState = this.store.select(bookState);
  }

  ngOnInit(): void {
    if (this.route.snapshot.params && this.route.snapshot.params.id) {
      this.bookId = this.route.snapshot.params.id;
      this.booksService.getByBookId(this.bookId).subscribe((data: Book) => {
        this.existingBook = data;
        this.initializeCreateBookForm(this.existingBook);
      });
    }
    this.initializeCreateBookForm(this.existingBook);

    // after dispatching the create book action, dispatch the load books action in the effects itself
    this.store.subscribe((data) => {
      if (data) {
        if (data.book.success) {
          this.createBookForm.reset();
        }
      }
      this.route.data.subscribe((params) => {
        if (params && params.isUpdate) {
          this.displayUpdate = params.isUpdate;
        } else {
          this.displayUpdate = false;
        }
      });
    });
  }

  private initializeCreateBookForm(existingBook?: Book): void {
    if (existingBook) {
      this.createBookForm = new FormGroup({
        book: new FormControl(existingBook.book, Validators.required),
        description: new FormControl(existingBook.description),
        author: new FormControl(existingBook.author, Validators.required),
        category: new FormControl(existingBook.category, Validators.required),
      });
    } else {
      this.createBookForm = new FormGroup({
        book: new FormControl('', Validators.required),
        description: new FormControl(''),
        author: new FormControl('', Validators.required),
        category: new FormControl('', Validators.required),
      });
    }
  }
  get book(): string {
    return this.createBookForm.get('book').value;
  }
  get description(): string {
    return this.createBookForm.get('description').value;
  }
  get author(): string {
    return this.createBookForm.get('author').value;
  }
  get category(): string {
    return this.createBookForm.get('category').value;
  }

  public createOrUpdateBook(): void {
    if (this.displayUpdate) {
      this.newBook = {
        book: this.book,
        description: this.description,
        author: this.author,
        category: this.category,
        id: this.existingBook.id,
      };
      this.store.dispatch(new UpdateBook(this.newBook));
      this.store.dispatch(new GetBooks());
      this.router.navigate(['/']);
    } else {
      this.newBook = {
        book: this.book,
        description: this.description,
        author: this.author,
        category: this.category,
      };
      this.store.dispatch(new AddBook(this.newBook));
      this.store.dispatch(new GetBooks());
      this.router.navigate(['/']);
    }
  }
}
