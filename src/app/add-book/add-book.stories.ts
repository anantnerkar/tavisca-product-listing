import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CreateBookComponent } from './add-book.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.state';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export default {
    title: 'AddBook Component',
    component: CreateBookComponent,
    decorators: [
        moduleMetadata({
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
const Template: Story<CreateBookComponent> = (args: CreateBookComponent) => ({
    component: CreateBookComponent,
    props: args,
});
 
export const Default = Template.bind({});
Default.args = {};