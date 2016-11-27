export class Ship {
  id: number;
  name: string;
  locationX: number;
  locationY: number;
  bearing: number;

  constructor(id: number, name: string, locationX: number, locationY, bearing: number) {
    this.id = id;
    this.name = name;
    this.locationX = locationX;
    this.locationY = locationY;
    this.bearing = bearing;
  }
}
