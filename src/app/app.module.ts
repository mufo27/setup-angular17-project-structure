import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLayoutModule } from './containers/admin-layout/admin-layout.module';
import { UserLayoutModule } from './containers/user-layout/user-layout.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    UserLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
