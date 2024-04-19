import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

import { RouterModule } from '@angular/router';

import { AdminRoleModule } from '../../modules/admin-role/admin-role.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoleModule
  ]
})
export class AdminLayoutModule { }
