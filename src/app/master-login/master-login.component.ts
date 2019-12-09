import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.scss'],
  animations: [
    trigger('cardOnInit', [
      transition('LoginPage <=> SignupPage',
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translate3d(0, 10%, 0)', visibility: 'visible', offset: 0 }),
          style({ opacity: 0.2, transform: 'translate3d(0, 8%, 0)', offset: 0.2 }),
          style({ opacity: 0.4, transform: 'translate3d(0, 6%, 0)', offset: 0.4 }),
          style({ opacity: 0.6, transform: 'translate3d(0, 4%, 0)', offset: 0.6 }),
          style({ opacity: 0.8, transform: 'translate3d(0, 2%, 0)', offset: 0.8 }),
          style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ])
        )
      )
    ])
  ]
})
export class MasterLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    const something = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    console.log(something);
    return something;
  }

}
