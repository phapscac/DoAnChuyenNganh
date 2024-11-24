import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from '../Product/list-product/list-product.component';
import { RouterModule } from '@angular/router';
import { ProductssComponent } from '../productss/productss.component';

@NgModule({
  declarations: [
    ListProductComponent,
    ProductssComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListProductComponent,
    ProductssComponent
  ]
})
export class SharedModule { }