import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from './add-book.component';
const booksServices = jasmine.createSpy('BooksService');
describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookComponent],
      providers: [booksServices]
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
