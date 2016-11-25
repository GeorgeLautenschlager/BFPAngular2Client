import { Component, OnInit }      from '@angular/core';

import { Ship }           from './ship';
import { ShipService }    from './ship.service';

import { GameboardComponent }     from './gameboard.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Battlefleet Perseus Phase 0</h1>
    <gameboard *ngIf="ships.length > 0" [ships]="ships"> </gameboard>
  `
})

export class AppComponent implements OnInit{
  ships = [];

  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
    this.getShips();
  }

  getShips(): void{
    this.shipService
        .getShips()
        .then(ships => this.ships = ships)
  }
}
