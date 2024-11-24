import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ApiService } from '../api.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
   
  ]
})
export class AdminModule { }
