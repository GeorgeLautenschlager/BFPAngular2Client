import { Component, ViewChild, ElementRef, Input, OnInit }  from '@angular/core';

import { Ship } from './ship';
import { ShipService } from './ship.service';

@Component({
  moduleId: module.id.replace("/dist/","/"),
  selector: 'gameboard',
  templateUrl: 'app/templates/gameboard.component.html'
})

export class GameboardComponent implements OnInit{
  @Input() ships: Ship[];
  @ViewChild("table") tableTop: ElementRef;
  selectedShip: Ship;

  // The radius of a small base on a 4" by 4" table
  smallBaseScaleFactor = 0.01639;
  // Length of an imperial cruiser on a 4" by 4" table
  shipScaleFactor = this.smallBaseScaleFactor*4;
  // 4" by 4" table height in millimetres
  tableStandardHeight = 1219.2;

  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
    this.shipService.bindSelectedShip(this);
  }

  onTableClick() {
    if (event.region){
      var ship = this.ships.find(ship => ship.id == parseInt(event.region.split('-')[1]))
    }

    // for starting transcompilation
    // if(true){
    //   var ship = this.ships.find(ship => ship.id == null)
    // }

    this.shipService.selectedShip.next(ship);
  }

  moveShip(moveAmount: string) {
    var distance = parseInt(moveAmount)*10;

    var distanceX = Math.round(distance*Math.sin(this.selectedShip.bearing*Math.PI/180));
    var distanceY = Math.round(-1*distance*Math.cos(this.selectedShip.bearing*Math.PI/180));

    this.selectedShip.locationX = this.selectedShip.locationX + distanceX;
    this.selectedShip.locationY = this.selectedShip.locationY + distanceY;

    this.shipService
        .updateShip(this.selectedShip)
        .then((ship) => {
          this.selectedShip = ship;
          this.drawShips();
        })
  }

  ngAfterViewInit() {
    this.drawShips();
  }

  drawShips() {
    let tableWidth = this.tableTop.nativeElement.width;
    let tableHeight = this.tableTop.nativeElement.height;
    const shipLength = tableHeight * this.shipScaleFactor;

    let ctx: CanvasRenderingContext2D = this.tableTop.nativeElement.getContext("2d");

    // clear canvas before drawing all ships
    ctx.clearRect(0, 0, tableWidth, tableHeight);

    for (let ship of this.ships) {
      // scale the ships coordinates
      let x = ship.locationX/(this.tableStandardHeight*2)*tableWidth;
      let y = ship.locationY/(this.tableStandardHeight)*tableHeight;

      ctx.save();
      ctx.translate(x, y);

      x = 0;
      y = 0;

      ctx.rotate((Math.PI/180)*ship.bearing);

      // Imperial Green, or what passes for it
      ctx.fillStyle = '#265401';
      ctx.beginPath();
      // move up half a ship length, at the same x
      ctx.moveTo(0, -shipLength/2);
      // draw the bottom corners
      ctx.lineTo(shipLength/4, shipLength/2);
      ctx.lineTo(-shipLength/4, shipLength/2);
      ctx.fill();

      // Add a hit region, so click events can tell us what region they hit
      ctx.addHitRegion({id: "ship-"+ship.id});

      ctx.restore();
    }
  }
}
