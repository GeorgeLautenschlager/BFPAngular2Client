import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { AppComponent }             from './app.component';
import { GameboardComponent }       from './gameboard.component';

import { ShipService }              from './ship.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, GameboardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ShipService ]
})
export class AppModule { }
