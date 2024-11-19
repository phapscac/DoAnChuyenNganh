import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { RegisterComponent } from './Register/Register.component';
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


@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    ListProductComponent,
    RegisterComponent,
    RegisterrComponent,
    AboutComponent,
    ServicesComponent,
    ProductssComponent,
    CustomerSupportComponent,
    RepairQuoteComponent,
    TermsOfUseComponent,
    WarrantyPolicyComponent,
    PrivacyPolicyComponent,
    ShippingPolicyComponent,
    InformationUsageComponent,
    ContactComponent
  ],
    

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
