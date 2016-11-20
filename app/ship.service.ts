import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';

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
               .then(response => response.json().ships)
               .catch(this.handleError);
  }

  getShip(id: number): Promise<Ship> {
    const url = `${this.shipsUrl}/${id}`
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().ship as Ship)
               .catch(this.handleError);
  }

  update(ship: Ship): Promise<Ship> {
    const url = `${this.shipsUrl}/${ship.id}`
    return this.http
               .put(url, JSON.stringify(ship), {headers: this.headers})
               .toPromise()
               .then(response => response.json().ship as Ship)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
