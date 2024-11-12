import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './Register/Register.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { AboutComponent } from './about/about.component'; 

const routes: Routes = [
    { path: 'register',
     component: RegisterComponent },
     {path: '',
      component: ListProductComponent},
      {path: 'product-detail',
      component: ProductDetailComponent},
      {path:'registerr',
      component: RegisterrComponent},
      {path:'about',
      component: AboutComponent
      },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
