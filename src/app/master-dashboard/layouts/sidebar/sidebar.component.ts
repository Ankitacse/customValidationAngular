import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isMenuOpened = false;
  isShowTitle = false;
  menuItems = [
    { title: 'Dashboard', icon: 'dashboard-icon.png', routerLink: '/app/dashboard' },    
    { title: 'Customer Management', icon: 'customer-mg-icon.png', routerLink: '/app/customers' },
    { title: 'Appraisal Management', icon: 'appisal-mg-icon.png', routerLink: 'app/appraisal-management' },
    { title: 'Repair Management', icon: 'repair-mg-icon.png', routerLink: '/app/repair-management' },
    { title: 'Setting', icon: 'setting-icon.png', routerLink: '/app/setting' },
    { title: 'Logout', icon: 'logout-icon.png', routerLink: '/app/login' }
  ];

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.isMenuOpened = !this.isMenuOpened;
    if( this.isShowTitle ) {
      this.isShowTitle = false;
    }else{
      setTimeout(() => {
        this.isShowTitle = true;
      }, 400);
    }

  }

}
