import { Injectable }   from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ship }         from './ship';

@Injectable()
export class ShipService {
  private shipsUrl = 'http://localhost:3000/ships';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getShips(): Promise<Ship[]> {
    const url = this.shipsUrl;

    return this.http.get(url)
               .toPromise()
               .then(response => this.deserializeShips(response))
               .catch(this.handleError);
  }

  getShip(id: number): Promise<Ship> {
    const url = `${this.shipsUrl}/${id}`
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().ship as Ship)
               .catch(this.handleError);
  }

  updateShip(ship: Ship): Promise<Ship> {
    const url = `${this.shipsUrl}/${ship.id}`
    return this.http
               .put(url, this.serializeShip(ship), {headers: this.headers})
               .toPromise()
               .then(response => response.json().ship as Ship)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private deserializeShips(res: Response) {
    let ships: Ship[] = [];

    for (let json of res.json().data){
      ships.push(this.deserializeShip(json));
    }

    return ships;
  }

  private deserializeShip(json: any) {
    return new Ship(json.id, json.attributes.name, json.attributes["location-x"], json.attributes["location-y"], json.attributes["bearing"])
  }

  private serializeShip(ship: Ship) {
    return {"data": {
      "type": "ships",
      "attributes": {
        "name": ship.name,
        "location_x": ship.locationX,
        "location_y": ship.locationY,
        "bearing": ship.bearing
      }
    }}
  }
}
