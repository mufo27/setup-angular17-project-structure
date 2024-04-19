import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserRoleModule { }
