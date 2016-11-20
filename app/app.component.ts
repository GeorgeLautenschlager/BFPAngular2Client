import { Component, OnInit }      from '@angular/core';

import { Ship }           from './ship';
import { ShipService }    from './ship.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>ALL AHEAD FULL AND DAMN THE TORPEDUS</h1>

    <ul>
      <li *ngFor="let ship of ships">
        <span>{{ship}}</span>
        <span>ID:</span> {{ship.id}}
        <span>Name:</span> {{ship.name}}
        <span>Location X:</span> {{ship.location_x}}
      </li>
    </ul>
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
