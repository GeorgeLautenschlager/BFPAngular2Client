import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { TableTopComponent }        from './table-top.component';
import { GameboardComponent }       from './gameboard.component';
import { ControlComponent }        from './control.component';

import { ShipService }              from './ship.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  exports:      [ TableTopComponent ],
  declarations: [ TableTopComponent, GameboardComponent, ControlComponent ],
  bootstrap:    [ TableTopComponent ],
  providers:    [ ShipService ]
})

export class TableTopModule { }
