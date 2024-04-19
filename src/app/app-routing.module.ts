import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './modules/admin-role/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './modules/admin-role/admin-profile/admin-profile.component';

import { UserLayoutComponent } from './containers/user-layout/user-layout.component';
import { UserDashboardComponent } from './modules/user-role/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './modules/user-role/user-profile/user-profile.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'profile', component: AdminProfileComponent },
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserDashboardComponent },
      { path: 'profile', component: UserProfileComponent },
    ]
  },
  { path: '**', redirectTo: 'admin' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
