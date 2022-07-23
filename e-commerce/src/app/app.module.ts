import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ECommerceAppComponent } from './components/e-commerce-app/e-commerce-app.component';
import { FiltersComponent } from './components/e-commerce-app/filters/filters.component';
import { ProductListComponent } from './components/e-commerce-app/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ECommerceAppComponent,
    FiltersComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
