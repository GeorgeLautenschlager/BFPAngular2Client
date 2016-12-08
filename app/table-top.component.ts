import { Component, OnInit }      from '@angular/core';

import { Ship }           from './ship';
import { ShipService }    from './ship.service';

@Component({
  selector: 'table-top',
  template: `
    <div>
      <div>
        nav component
      </div>

      <div>
        <!-- <gameboard *ngIf="ships.length > 0" [ships]="ships"> </gameboard> -->
      </div>
    </div>

    <div>
      control component
    </div>
  `,
  providers: [ ShipService ]
})

export class TableTopComponent implements OnInit{
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
