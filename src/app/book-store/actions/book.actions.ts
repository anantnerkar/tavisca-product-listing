import { Action } from '@ngrx/store';
import { Book } from '../../models/book';


export const ADD_BOOK = '[Book] ADD';
export const GET_BOOKS = '[Book] GET';
export const DELETE_BOOKS = '[Book] DELETE';
export const UPDATE_BOOKS = '[Book] UPDATE';
export const DATA_LOAD = '[Book] LOAD';
export const ADD_BOOK_SUCCESS = '[Book] ADD Book SUCCESS';
export const UPDATE_BOOK_SUCCESS = '[Book] UPDATE Book SUCCESS';
export const DELETE_BOOK_SUCCESS = '[Book] DELETE Book SUCCESS';

export class AddBook implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: Book) {
    }
}
export class GetBooks implements Action {
    readonly type = GET_BOOKS;
    constructor() {}
}
export class DeleteBooks implements Action {
    readonly type = DELETE_BOOKS;
    constructor(public payload: number) {}
}
export class UpdateBook implements Action {
    readonly type = UPDATE_BOOKS;
    constructor(public payload: Book) {}
}

export class LoadDataSuccess implements Action {
    readonly type = DATA_LOAD;
    constructor(public payload: Book[]) {}
}
export class AddBookSuccess implements Action {
    readonly type = ADD_BOOK_SUCCESS;
    constructor(public payload: Book) {}
}
export class UpdateBookSuccess implements Action {
    readonly type = UPDATE_BOOK_SUCCESS;
    constructor(public payload: Book) {}
}
export class DeleteBookSuccess implements Action {
    readonly type = DELETE_BOOK_SUCCESS;
  }
export type BookActions =
    AddBook |
    GetBooks | 
    DeleteBooks | 
    UpdateBook | 
    LoadDataSuccess | 
    AddBookSuccess | 
    UpdateBookSuccess | 
    DeleteBookSuccess;
