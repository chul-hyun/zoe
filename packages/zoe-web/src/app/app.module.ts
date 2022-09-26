import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http/interceptors';
import { ProfileMenuComponent } from './template/profile-menu/profile-menu.component';

@NgModule({
  declarations: [AppComponent, ProfileMenuComponent],
  imports: [
    BrowserModule, // ngIf, ngFor, etc.
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
