import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ListProductComponent } from './Product/list-product/list-product.component';
import { RegisterComponent } from './Register/Register.component';

@NgModule({
  declarations: [	
    AppComponent,
    FooterComponent,
    ProductDetailComponent,
    ListProductComponent,
    RegisterComponent
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
