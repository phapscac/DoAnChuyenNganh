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
      {path:'services',
      component: ServicesComponent
      },
      {
        path:'productss',
        component: ProductssComponent
      },
      {
        path:'customer-support',  
        component: CustomerSupportComponent
      },
      {
        path:'repair-quote',
        component: RepairQuoteComponent
      },
      {path:'terms-of-use',
        component: TermsOfUseComponent},
      {path:'warranty-policy',  
        component: WarrantyPolicyComponent
      },
      {path:'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {path:'shipping-policy',
        component: ShippingPolicyComponent
      },
      {path:'information-usage',
        component: InformationUsageComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
      {path:'change-password',
        component: ChangePasswordComponent
      },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
