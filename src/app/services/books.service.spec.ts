// import { TestBed, tick, fakeAsync } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { BooksService } from './books.service';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { Book } from '../_models';

// describe('BooksService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       providers: [BooksService],
//     });
//   });
//   it('should be created', () => {
//     const service1 = TestBed.inject(BooksService);
//     expect(service1).toBeTruthy();
//   });
// });


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from '../add-book/add-book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';


const booksServices = jasmine.createSpy('BooksService');
describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookComponent],
      imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
              ],     
      providers: [provideMockStore()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});