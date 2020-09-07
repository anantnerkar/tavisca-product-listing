import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CreateBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  { path: 'login', component: SignUpComponent, data: { isLogin: true } },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create', component: CreateBookComponent },
  {
    path: 'update/:id',
    component: CreateBookComponent,
    data: { isUpdate: true },
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
