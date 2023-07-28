import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../shared/guard/admin.guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: AdminHomeComponent
      },
      {
        path: "add-user",
        component: AddUserComponent
      },
      {
        path: "edit-user/:user_id",
        component: AddUserComponent
      },
      {
        path: "change-password",
        component: ChangePasswordComponent
      }
    ],
    canActivate: [AdminGuard]
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
export class AdminRoutingModule { }
