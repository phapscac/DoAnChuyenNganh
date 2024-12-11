import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ServiceListComponent } from './service-list/service-list.component';
import{AddServiceComponent} from './add-service/add-service.component';
<<<<<<< HEAD
=======
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseInComponent } from './warehouse-in/warehouse-in.component';
import { WarehouseOutComponent } from './warehouse-out/warehouse-out.component';
import { ReportComponent } from './report/report.component';


>>>>>>> parent of 0bd40ba (Merge branch 'oanh')



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Layout riêng của Admin
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path: 'add-product', component: AddProductComponent},
      {path: 'product-list', component: ProductListComponent},
      {path : 'service-list', component: ServiceListComponent},
      {path : 'add-service', component: AddServiceComponent},
<<<<<<< HEAD
=======
      {path : 'add-employee', component: AddEmployeeComponent},
      {path : 'add-contract', component: AddContractComponent},
      {path : 'add-customer', component: AddCustomerComponent},
      {path : 'employee-list', component: EmployeeListComponent},
      {path : 'customer-list', component: CustomerListComponent},
      {path : 'promotion-list', component: PromotionListComponent},
      {path : 'add-promotion', component: AddPromotionComponent},
      {path : 'product-category', component: ProductCategoryComponent},
      {path : 'service-category', component: ServiceCategoryComponent},
      {path : 'warehouse-list', component: WarehouseListComponent},
      {path : 'warehouse-in', component: WarehouseInComponent},
      {path : 'warehouse-out', component: WarehouseOutComponent},
      {path : 'report', component: ReportComponent},
>>>>>>> parent of 0bd40ba (Merge branch 'oanh')
      // Thêm các route con khác tại đây
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
