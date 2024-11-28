import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './Register/Register.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { AboutComponent } from './about/about.component'; 
import { ServicesComponent } from './services/services.component';
import { ProductssComponent } from './productss/productss.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { RepairQuoteComponent } from './repair-quote/repair-quote.component';   
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { WarrantyPolicyComponent } from './warranty-policy/warranty-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { InformationUsageComponent } from './information-usage/information-usage.component';
import { ContactComponent } from './contact/contact.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
   
      { path: '', component: MainLayoutComponent, children: [
          { path: '', component: ListProductComponent },
          {path: 'product-detail',
          component: ProductDetailComponent},
          {path:'registerr',
          component: RegisterrComponent},
          {path:'register',
          component: RegisterComponent },
          {path:'about',
          component: AboutComponent},
          {path:'services',
          component: ServicesComponent},
          { path:'productss',
            component: ProductssComponent },
          {path:'customer-support',  
            component: CustomerSupportComponent },
          { path:'repair-quote',
            component: RepairQuoteComponent},
          {path:'terms-of-use',
            component: TermsOfUseComponent},
          {path:'warranty-policy',  
            component: WarrantyPolicyComponent },
          {path:'privacy-policy',
            component: PrivacyPolicyComponent},
          {path:'shipping-policy',
            component: ShippingPolicyComponent },
          {path:'information-usage',
            component: InformationUsageComponent},
          {path:'contact',
            component: ContactComponent},
          {path:'change-password',
            component: ChangePasswordComponent},
            { path: 'search-results', component:SearchResultsComponent},

    
       
      ]},
     
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: '',
        component: MainLayoutComponent, // Layout chính
        children: [
          { path: 'home', component: ListProductComponent },
        ]
      },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
      
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
