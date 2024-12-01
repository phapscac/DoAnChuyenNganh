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
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { FormsModule } from '@angular/forms';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInComponent } from './warehouse-in/warehouse-in.component';
import { WarehouseOutComponent } from './warehouse-out/warehouse-out.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    AddProductComponent,
    ProductListComponent,
    ServiceListComponent,
    AddServiceComponent,
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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
   
  ]
})
export class AdminModule { }
