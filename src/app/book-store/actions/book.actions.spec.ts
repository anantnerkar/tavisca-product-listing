import {

    ADD_BOOK, AddBook,
  
AddBookSuccess,
  
ADD_BOOK_SUCCESS,
  
    GetBooks,
  
    GET_BOOKS,
  
    LoadDataSuccess,
  
    DATA_LOAD,
  
    UpdateBook,
  
    UPDATE_BOOKS,
  
    UPDATE_BOOK_SUCCESS,
  
    DELETE_BOOKS,
  
    DeleteBooks,
  
    UpdateBookSuccess,
  
  } from './book.actions';
  
  import { Book } from 'src/app/_models';
  
  const mockBook = {
  
    book: 'If you judge people, you have no time to love them',
  
    description:
  
      'If you judge people, you have no time to love them - description',
  
    author: 'Dalai Lama',
  
    category: 'Love',
  
  };
  
  
  
  describe('GetAllBooks', () => {
  
    it('should create an action of type ADD_BOOK', () => {
  
      const action = new AddBook(mockBook);
  
      expect(action.type).toEqual(ADD_BOOK);
  
    });
  
  });
  
  
  
  describe('AddBookSuccess', () => {
  
    it('should create an action of type ADD_BOOK_SUCCESS', () => {
  
      const payload: Book = {
  
        id: 3,
  
        book: 'If you judge people, you have no time to love them',
  
        description:
  
          'If you judge people, you have no time to love them - description',
  
        author: 'Dalai Lama',
  
        category: 'Love',
  
      };
  
      const action = new AddBookSuccess(payload);
  
      expect({ ...action }).toEqual({
  
        type: ADD_BOOK_SUCCESS,
  
        payload,
  
      });
  
    });
  
  });
  
  
  
  describe('LoadDataSuccess', () => {
  
    it('should create an action of type GET_BOOKS', () => {
  
      const payload: Book[] = [
  
        {
  
          id: 3,
  
          book: 'If you judge people, you have no time to love them',
  
          description:
  
            'If you judge people, you have no time to love them - description',
  
          author: 'Dalai Lama',
  
          category: 'Love',
  
        },
  
        {
  
          book: 'Be kind whenever possible. It is always possible',
  
          description:
  
            'Be kind whenever possible. It is always possible- description',
  
          author: 'Dalai Lama',
  
          category: 'Love new',
  
          id: 5,
  
        },
  
      ];
  
      const action = new LoadDataSuccess(payload);
  
      expect({ ...action }).toEqual({
  
        type: DATA_LOAD,
  
        payload,
  
      });
  
    });
  
  });
  
  
  
  describe('UpdateBook', () => {
  
    it('should create an action of type UPDATE_BOOKS', () => {
  
      const payload: Book = {
  
        id: 3,
  
        book: 'If you judge people, you have no time to love them',
  
        description:
  
          'If you judge people, you have no time to love them - description',
  
        author: 'Dalai Lama',
  
        category: 'Love',
  
      };
  
      const action = new UpdateBook(payload);
  
      expect({ ...action }).toEqual({
  
        type: UPDATE_BOOKS,
  
        payload,
  
      });
  
    });
  
  });
  
  describe('UpdateBookSuccess', () => {
  
    it('should create an action of type UPDATE_BOOK_SUCCESS', () => {
  
      const payload: Book = {
  
        id: 3,
  
        book: 'If you judge people, you have no time to love them',
  
        description:
  
          'If you judge people, you have no time to love them - description',
  
        author: 'Dalai Lama',
  
        category: 'Love',
  
      };
  
      const action = new UpdateBookSuccess(payload);
  
      expect({ ...action }).toEqual({
  
        type: UPDATE_BOOK_SUCCESS,
  
        payload,
  
      });
  
    });
  
  });