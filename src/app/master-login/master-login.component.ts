import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInUp } from '../core/animations/trigger';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.scss'],
  animations: [
    slideInUp
  ]
})
export class MasterLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
