import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SocketsService } from '../services/sockets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription : Subscription | any;
  @ViewChild(MatSidenav) sidenav: any;

  constructor(
    private webSocketService : SocketsService
  ) { }

  ngOnInit(): void {
    // this.subscription = this.webSocketService.connect('wss://your-websocket-url').subscribe(
    //   (message) => {
    //     console.log('Received message:', message);
    //   },
    //   (error) => {
    //     console.error('WebSocket error:', error);
    //   }
    // );
  }

  close(reason: string) {
    this.sidenav.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.webSocketService.close();
  }
}
