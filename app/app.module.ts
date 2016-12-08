import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { TableTopModule } from './table-top.module';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableTopModule
  ],
  declarations: [
    AppComponent,
    SplashComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
