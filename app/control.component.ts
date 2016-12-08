import { Component } from '@angular/core';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component ({
  moduleId: module.id.replace("/dist","/"),
  selector: 'control',
  templateUrl: 'app/templates/control.component.html'
})

export class ControlComponent{
  selectedShip: Ship;
}
