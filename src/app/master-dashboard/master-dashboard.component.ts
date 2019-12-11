import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../core/animations/trigger';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.scss'],
  animations: [
    fadeIn
  ]
})
export class MasterDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
