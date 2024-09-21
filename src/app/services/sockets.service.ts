import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private socket: WebSocket | any;
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>();
   }

   connect(url: string): Observable<any> {
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event: any) => {
      this.subject.next(event.data);
    };

    this.socket.onerror = (error : any) => {
      console.error('WebSocket Error:', error);
      this.subject.error(error);
    };

    return this.subject.asObservable();
  }

  sendMessage(message: any): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open');
    }
  }

  close(): void {
    this.socket.close();
  }
}
