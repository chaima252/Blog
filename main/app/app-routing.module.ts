import { LandingPageComponent } from './landing-page/landing-page.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    component:LandingPageComponent,
    path:''
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:SignupComponent,
    path:'signup'
  }


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
