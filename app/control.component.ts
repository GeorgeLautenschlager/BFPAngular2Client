import { Component, OnInit } from '@angular/core';

import { Ship } from './ship';
import { ShipService } from './ship.service';
import { Subject } from 'rxjs/Rx';

@Component ({
  moduleId: module.id.replace("/dist","/"),
  selector: 'control',
  templateUrl: 'app/templates/control.component.html'
})

export class ControlComponent implements OnInit{
  selectedShip: Ship;

  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
    this.bindSelectedShip();
  }

  bindSelectedShip() {
    this.shipService.selectedShip.subscribe({
      next: (ship) => {
        this.selectedShip = ship
      }
    });
  }
}
