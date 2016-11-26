export class Ship {
  id: number;
  name: string;
  locationX: number;
  locationY: number;

  constructor(id: number, name: string, locationX: number, locationY) {
    this.id = id;
    this.name = name;
    this.locationX = locationX;
    this.locationY = locationY;
  }
}
