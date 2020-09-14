import { AppComponent } from '../app/app.component';
import { Meta, Story } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../app/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { BookEffects } from '../app/book-store/effects/book.effects';
import { AuthService } from '../app/services/auth.service';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeaderComponent } from '../app/_components/header/header.component';
//import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CreateBookComponent } from './add-book/add-book.component';
//import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { BooksListComponent } from './books-list/books-list.component';

export default {
  title: 'App component',
  component: AppComponent,
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  moduleMetadata: {
    declarations: [
      AppComponent,
      HomeComponent,
      SignUpComponent,
      //LogInComponent,
      HeaderComponent,
      CreateBookComponent,
      BooksListComponent,
      //ListProductComponent,
    ],
    imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([AuthEffects, BookEffects]),
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        
        { path: 'login', component: SignUpComponent, data: { isLogin: true } },
        { path: 'sign-up', component: SignUpComponent },
        { path: 'create', component: CreateBookComponent },
        { path: 'home', component: HomeComponent },
        {
            path: 'update/:id',
            component: CreateBookComponent,
            data: { isUpdate: true },
        },
        { path: '', component: HomeComponent },
        { path: '**', redirectTo: '/' }
      ]),
      StoreModule.forRoot(reducers, {}),
    ],
    providers: [Store, AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  props: { args },
});
export const App = Template.bind({});

