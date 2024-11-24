import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { RegisterComponent } from './Register/Register.component';
import { RegisterrComponent } from './registerr/registerr.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    ListProductComponent,
    RegisterComponent,
    RegisterrComponent,
    AboutComponent,
  ],
    

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
