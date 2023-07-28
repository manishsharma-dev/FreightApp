import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor/vendor.component';
import { LoginComponent } from './login/login.component';
import { CommonProjModule } from '../shared/common-proj.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';


@NgModule({
  declarations: [
    VendorComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PasswordResetComponent,
    VendorHomeComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    CommonProjModule
  ]
})
export class VendorModule { }
