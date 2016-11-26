import { Component, ViewChild, ElementRef, OnInit, Input }  from '@angular/core';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component({
  moduleId: module.id.replace("/dist/","/"),
  selector: 'gameboard',
  templateUrl: 'app/templates/gameboard.component.html'
})

export class GameboardComponent{
  @Input() ships: Ship[];
  @ViewChild("table") tableTop: ElementRef;

  // The radius of a small base on a 4" by 4" table
  smallBaseScaleFactor = 0.01639;
  // Length of an imperial cruiser on a 4" by 4" table
  shipScaleFactor = 0.01639*4;
  // 4" by 4" table height in millimetres
  tableStandardHeight = 1219.2;

  selectedShip: Ship;

  constructor() { }

  onTableClick() {
    if (event.region){
      var ship = this.ships.find(ship => ship.id == parseInt(event.region.split('-')[1]))
    }

    this.selectedShip = ship;
  }

  ngAfterViewInit() {
    this.drawShips();
  }

  drawShips() {
    let tableWidth = this.tableTop.nativeElement.width;
    let tableHeight = this.tableTop.nativeElement.height;
    const shipLength = tableHeight * this.shipScaleFactor;

    let ctx: CanvasRenderingContext2D = this.tableTop.nativeElement.getContext("2d");

    for (let ship of this.ships) {
      // scale the ships coordinates
      const x = ship.locationX/(this.tableStandardHeight*2)*tableWidth;
      const y = ship.locationY/(this.tableStandardHeight)*tableHeight;

      // Imperial Green, or what passes for it
      ctx.fillStyle = '#265401';
      ctx.beginPath();
      // move forward half a ship length, at same Y
      ctx.moveTo(x + shipLength/2, y);
      // draw line to top right "corner" of rectangle
      ctx.lineTo(x - shipLength/2, y-shipLength/4)
      // Now draw a line to the bottome left "corner"
      ctx.lineTo(x - shipLength/2, y+shipLength/4)
      // Now fill the triangle
      ctx.fill();

      // Add a hit region, so click events can tell us what region they hit
      ctx.addHitRegion({id: "ship-"+ship.id});
    }
  }
}
