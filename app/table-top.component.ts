import { Component, OnInit }      from '@angular/core';

import { Ship }           from './ship';
import { ShipService }    from './ship.service';

@Component({
  moduleId: module.id.replace("/dist","/"),
  selector: 'table-top',
  templateUrl: 'app/templates/table-top.component.html',
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
