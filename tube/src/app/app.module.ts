import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { BrowseComponent } from './browse/browse.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    HistoryComponent,
    BrowseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
