import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeIn } from '../core/animations/trigger';
import { RouterOutlet, NavigationError } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd} from '@angular/router';

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
  loading = false;

  constructor(router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
  }

  /**
   * @description return router animation state
   * @param outlet router-outlet referance
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  /**
   * @description navigator for route process
   * @param event RouterEvent
   */
  private navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }

    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
