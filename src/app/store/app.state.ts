import * as auth from './reducers/auth.reducers';
import * as book from '../book-store/reducers/book.reducer';
import { createFeatureSelector } from '@ngrx/store';
export interface AppState {
    authState: auth.State;
    book: book.State;
}

export const reducers = {
    auth: auth.reducer,
    book: book.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const bookState = createFeatureSelector<AppState>('book');
