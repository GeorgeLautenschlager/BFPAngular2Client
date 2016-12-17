import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { TableTopComponent }        from './table-top.component';
import { NavComponent }             from './nav.component';
import { GameboardComponent }       from './gameboard.component';
import { ControlComponent }         from './control.component';

import { ShipService }              from './ship.service';
import { WebSocketService }         from './web-socket.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  exports:      [ TableTopComponent ],
  declarations: [
    TableTopComponent,
    NavComponent,
    GameboardComponent,
    ControlComponent
  ],
  bootstrap:    [ TableTopComponent ],
  providers:    [ ShipService, WebSocketService ]
})

export class TableTopModule { }
