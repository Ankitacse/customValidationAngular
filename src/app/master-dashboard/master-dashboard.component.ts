import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeIn } from '../core/animations/trigger';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.scss'],
  animations: [
    fadeIn
  ]
})
export class MasterDashboardComponent implements OnInit {
  @ViewChild(SidebarComponent, { static: true }) sideNav: SidebarComponent;

  constructor() {
  }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
