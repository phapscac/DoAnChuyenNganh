import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductssComponent } from '../productss/productss.component';

@NgModule({
  declarations: [
    ProductssComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductssComponent
  ]
})
export class SharedModule { }