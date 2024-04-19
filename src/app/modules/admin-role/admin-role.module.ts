import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminRoleModule { }
