import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';

import { VendorGuard } from '../shared/guard/vendor.guard'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';

const routes: Routes = [
  {
    path: "",
    component: VendorComponent,
    children : [
      {
        path : "",
        component : VendorHomeComponent
      }
    ]
    //canActivate: [VendorGuard]
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "reset-password",
    component: PasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
