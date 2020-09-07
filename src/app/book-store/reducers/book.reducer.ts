import { Book } from '../../models/book';
import {

  BookActions, ADD_BOOK, GET_BOOKS,
  DELETE_BOOKS, UPDATE_BOOKS, GetBooks,
  LoadDataSuccess, AddBookSuccess, AddBook,
  DeleteBooks, UpdateBook, UpdateBookSuccess, DeleteBookSuccess,
  DATA_LOAD, ADD_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS, DELETE_BOOK_SUCCESS
} from '../actions/book.actions';

export interface State {
  book: Book[];
  success: boolean | null;
  message: string | null;
}

export const initialState: State = {
  book: [],
  message: null,
  success: null
};
export function reducer(state: State = initialState, action: BookActions): State {
    switch (action.type) {
        case ADD_BOOK: {
        return {
          ...state
        };
        }
        case GET_BOOKS: {
            return {
              ...state,
            };
      }
        case DELETE_BOOKS: {
            return {
                    ...state
            };
        }
      case UPDATE_BOOKS: {
        return {
          ...state,
        };
      }
      case DATA_LOAD: {
        return {
          book: action.payload,
          message: null,
          success: null
        };
      }
      case ADD_BOOK_SUCCESS: {
        return {
          book: [...state.book, action.payload],
          message: 'Book is added successfully!',
          success: true
        };
      }
        case UPDATE_BOOK_SUCCESS: {
          return {
            ...state,
            message: 'Book is updated successfully!',
            success: true
          };
      }
      case DELETE_BOOK_SUCCESS: {
        return {
          ...state
        };
        }
      default: {
        return state;
      }
    }
  }
