import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import {
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import { IconModule } from '@coreui/icons-angular';
import { DefaultFooterComponent } from '../containers/default-layout/default-footer/default-footer.component';
import { DefaultHeaderComponent } from '../containers/default-layout/default-header/default-header.component';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
];

@NgModule({
  declarations: [...APP_CONTAINERS],
  imports: [
    CommonModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    ...APP_CONTAINERS
  ]
})
export class CommonProjModule { }
