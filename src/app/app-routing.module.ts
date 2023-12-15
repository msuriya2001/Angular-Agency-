import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';

const routes: Routes = [
{path:"", component:LoginComponent},
{path:"SignUp", component:SignUPComponent},
{path:"Home", component:HomeLandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
