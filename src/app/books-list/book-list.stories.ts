import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BooksListComponent } from './books-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.state';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CreateBookComponent } from '../add-book/add-book.component';
import { HomeComponent } from '../home/home.component';
export default {
    title: 'Booklist Component',
    component: BooksListComponent,
    decorators: [
        moduleMetadata({
            declarations: [CreateBookComponent, HomeComponent],
            imports: [CommonModule, 
                      FormsModule,
                      ReactiveFormsModule,
                      HttpClientModule,
                      StoreModule.forRoot(reducers, {}), 
                      RouterTestingModule, 
                      RouterModule.forRoot([])
                    ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService]
        }),
    ],
} as Meta;
const Template: Story<BooksListComponent> = (args: BooksListComponent) => ({
    component: BooksListComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {};