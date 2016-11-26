export class Ship {
  id: number;
  name: string;
  locationX: number;
  locationY: number;
  heading: number;

  constructor(id: number, name: string, locationX: number, locationY, heading: number) {
    this.id = id;
    this.name = name;
    this.locationX = locationX;
    this.locationY = locationY;
    this.heading = heading;
  }
}
