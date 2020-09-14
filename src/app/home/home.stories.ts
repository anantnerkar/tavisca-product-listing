// import { moduleMetadata } from '@storybook/angular';
// import { CommonModule, APP_BASE_HREF } from '@angular/common';
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { HomeComponent } from './home.component';
// import { StoreModule } from '@ngrx/store';
// import { reducers } from '../store/app.state';
// import { RouterTestingModule } from '@angular/router/testing';
// import { RouterModule } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { CreateBookComponent } from '../add-book/add-book.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// export default {
//     title: 'Booklist Component',
//     component: HomeComponent,
//     decorators: [
//         moduleMetadata({
//             declarations: [CreateBookComponent, HomeComponent],
//             imports: [CommonModule, 
//                       FormsModule,
//                       ReactiveFormsModule,
//                       HttpClientModule,
//                       StoreModule.forRoot(reducers, {}), 
//                       RouterTestingModule, 
//                       RouterModule.forRoot([])
//                     ],
//             providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//         }),
//     ],
// } as Meta;
// const Template: Story<HomeComponent> = (args: HomeComponent) => ({
//     component: HomeComponent,
//     props: args,
// });

// export const Default = Template.bind({});
// Default.args = {};


import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HomeComponent } from '../home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.state';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Home Component',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  component: HomeComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
