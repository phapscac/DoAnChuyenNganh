import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './Register/Register.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { RepairQuoteComponent } from './repair-quote/repair-quote.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { WarrantyPolicyComponent } from './warranty-policy/warranty-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { InformationUsageComponent } from './information-usage/information-usage.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    RegisterComponent,
    RegisterrComponent,
    AboutComponent,
    ServicesComponent,
    CustomerSupportComponent,
    RepairQuoteComponent,
    TermsOfUseComponent,
    WarrantyPolicyComponent,
    PrivacyPolicyComponent,
    ShippingPolicyComponent,
    InformationUsageComponent,
    ContactComponent,
    ChangePasswordComponent,
    HomeComponent,
    MainLayoutComponent,
    ListProductComponent,
    SearchResultsComponent
  ],
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
