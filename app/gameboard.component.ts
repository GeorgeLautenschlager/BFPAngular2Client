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
    console.log("test");
    let context: CanvasRenderingContext2D = this.tableTop.nativeElement.getContext("2d");



    context.fillStyle = 'olive';

    for (let ship of this.ships) {
      context.fillStyle = 'green';
      // context.fillRect(10, 10, 150, 150);
      // debugger;
      context.fillRect(ship.locationX, ship.locationY, 50, 50);
    }

  }
}
