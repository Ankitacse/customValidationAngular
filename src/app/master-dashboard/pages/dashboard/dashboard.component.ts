import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('cardOnInit', [
      transition(':enter, * => 0, * => -1',
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translate3d(0, 20%, 0)', visibility: 'visible', offset: 0 }),
          style({ opacity: 0.2, transform: 'translate3d(0, 16%, 0)', offset: 0.2 }),
          style({ opacity: 0.4, transform: 'translate3d(0, 12%, 0)', offset: 0.4 }),
          style({ opacity: 0.6, transform: 'translate3d(0, 8%, 0)', offset: 0.6 }),
          style({ opacity: 0.8, transform: 'translate3d(0, 4%, 0)', offset: 0.8 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ])
        )
      )
    ])
  ]
})
export class DashboardComponent implements OnInit {
  totalAnimation = -1;
  constructor() { }

  ngOnInit() {
  }

}
