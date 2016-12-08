import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

import { TableTopComponent }        from './table-top.component';
import { GameboardComponent }       from './gameboard.component';

import { ShipService }              from './ship.service';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ TableTopComponent ],
  declarations: [ TableTopComponent, GameboardComponent ],
  bootstrap:    [ TableTopComponent ],
  providers:    [ ShipService ]
})

export class TableTopModule { }
