import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserLayoutComponent } from './user-layout.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

import { RouterModule } from '@angular/router';

import { UserRoleModule } from '../../modules/user-role/user-role.module';

@NgModule({
  declarations: [
    UserLayoutComponent,
    UserSidebarComponent,
    UserHeaderComponent,
    UserFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoleModule
  ]
})
export class UserLayoutModule { }
