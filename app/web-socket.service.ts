import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs/Rx';

import { Ship } from './ship';

@Injectable()
export class WebSocketService {
  private socketUrl: string = 'ws://localhost:3000/cable';
  socket: Subject<Object>;

  constructor() {
    let ws = new WebSocket(this.socketUrl);
    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.next.bind(obs);
        ws.onclose = obs.next.bind(obs);

        return ws.close.bind(ws);
      }
    );

    ws.onopen = () => {
      var msg = {"command":"subscribe","identifier":"{\"channel\":\"ShipChannel\"}"}
      ws.send(JSON.stringify(msg));
    }

    let observer = {
        next: (data: Object) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(data));
            }
        },
    };

    this.socket = Subject.create(observer, observable);
  }

  move(Id): void {
    var msg = {"command":"message","identifier":"{\"channel\":\"ShipChannel\"}","data":"{\"action\":\"test_event\",\"message\":\"All ahead full and damn the torpedoes!\"}"}
    this.socket.next(msg);
  }
}
