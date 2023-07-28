import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CommonProjModule } from '../shared/common-proj.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserLogComponent } from './user-log/user-log.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdminHomeComponent,
    AddUserComponent,
    PasswordResetComponent,
    UserLogComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonProjModule
  ]
})
export class AdminModule { }
