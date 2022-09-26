import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './Component/forgot/forgot.component';
import { SigninComponent } from './Component/signin/signin.component';
import { RegisterComponent } from './Component/register/register.component';
import { ResetComponent } from './Component/reset/reset.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'signin',component:SigninComponent},
  {path:'resetPassword',component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }