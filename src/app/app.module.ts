import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddingProductsComponent } from './adding-products/adding-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUPComponent,
    HomeLandingComponent,
    AddingProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
