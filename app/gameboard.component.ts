import { Component, ViewChild, ElementRef, OnInit, Input }  from '@angular/core';

import { Ship } from './ship';

@Component({
  moduleId: module.id,
  selector: 'gameboard',
  templateUrl: 'gameboard.component.html'
})

export class GameboardComponent{
  @Input() ships: Ship[];
  @ViewChild("table") tableTop: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    const shipLength = this.tableTop.nativeElement.width * 0.01639;
    let tableWidth = this.tableTop.nativeElement.width;
    let tableHeight = this.tableTop.nativeElement.height;

    let ctx: CanvasRenderingContext2D = this.tableTop.nativeElement.getContext("2d");

    for (let ship of this.ships) {
      // scale the ships coordinates
      const x = ship.locationX/2438.4 * tableWidth;
      const y = ship.locationY/1219.2 * tableHeight;

      // Imperial Green, or what passes for it
      ctx.fillStyle = '#265401';
      ctx.beginPath();
      // move forward half a ship length, at same Y
      ctx.moveTo(x + shipLength/2, y);
      // draw line to top right "corner" of rectangle
      ctx.lineTo(x - shipLength/2, y - shipLength/4)
      // Now draw a line to the bottome left "corner"
      ctx.lineTo(x - shipLength/2,
        y + shipLength/4)
      // Now fill the triangle
      ctx.fill();

      ctx.addHitRegion({id: "ship-"+ship.id});
    }

    let clickHandler = (evt:Event) => {
      var ships = this.ships;

      ship = ships.find(ship => ship.id == parseInt(event.region.split('-')[1]))

      alert(ship.name)
    }

    this.tableTop.nativeElement.addEventListener("click",clickHandler)

  }
}
