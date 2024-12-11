import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ApiService } from '../api.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInComponent } from './warehouse-in/warehouse-in.component';
import { WarehouseOutComponent } from './warehouse-out/warehouse-out.component';
import { ReportComponent } from './report/report.component';
>>>>>>> parent of 0bd40ba (Merge branch 'oanh')

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    AddProductComponent,
    ProductListComponent,
    ServiceListComponent,
    AddServiceComponent,
<<<<<<< HEAD
=======
    AddEmployeeComponent,
    AddContractComponent,
    AddCustomerComponent,
    EmployeeListComponent,
    CustomerListComponent,
    PromotionListComponent,
    AddPromotionComponent,
    ServiceCategoryComponent,
    ProductCategoryComponent,
    WarehouseListComponent,
    WarehouseInComponent,
    WarehouseOutComponent,
    ReportComponent,
>>>>>>> parent of 0bd40ba (Merge branch 'oanh')
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
   
  ]
})
export class AdminModule { }
