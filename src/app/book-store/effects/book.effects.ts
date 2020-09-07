import { Injectable } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { map, switchMap, tap, mergeMap, take, pluck } from 'rxjs/operators';
import {
    BookActions, ADD_BOOK, GET_BOOKS,
    DELETE_BOOKS, UPDATE_BOOKS, GetBooks,
    LoadDataSuccess, AddBookSuccess, AddBook,
    DeleteBooks, UpdateBook, UpdateBookSuccess, DeleteBookSuccess
} from '../actions/book.actions';
import { Book } from '../../models/book';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class BookEffects {
    constructor(private booksService: BooksService, private actions: Actions) {
    }
    @Effect({ dispatch: true })
    GetBooks: Observable<any> = this.actions.pipe(
        ofType(GET_BOOKS),
        map((action: GetBooks) => action),
        mergeMap(payload => {
            return this.booksService.getAllBooks().pipe(
                map((data) => {
                    return new LoadDataSuccess(data);
                }));
        }));

    @Effect({ dispatch: true })
    CreateBooks: Observable<any> = this.actions.pipe(
        ofType(ADD_BOOK),
        map((action: AddBook) => action.payload),
        mergeMap(payload => {
            return this.booksService.createBook(payload).pipe(
                map((data) => {
                    if (data) {
                        return new AddBookSuccess(data);
                    }
                }));
        }));
    @Effect({ dispatch: true })
    DeleteBook: Observable<any> = this.actions.pipe(
        ofType(DELETE_BOOKS),
        map((action: DeleteBooks) => action.payload),
        mergeMap(payload => {
            return this.booksService.deleteBook(payload).pipe(
                map((data) => {
                    return new DeleteBookSuccess();
                }));
        }));
    @Effect({ dispatch: true })
    UpdateBooks: Observable<any> = this.actions.pipe(
        ofType(UPDATE_BOOKS),
        map((action: UpdateBook) => action.payload),
        mergeMap(payload => {
            return this.booksService.updateBook(payload).pipe(
                map((data) => {
                    if (data) {
                        return new UpdateBookSuccess(data);
                    }
                }));
        }));
}
