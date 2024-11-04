import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './Register/Register.component';
import { ListProductComponent } from './Product/list-product/list-product.component';

const routes: Routes = [
    { path: 'register',
     component: RegisterComponent },
     {path: '',
      component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
