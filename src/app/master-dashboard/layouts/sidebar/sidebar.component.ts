import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

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
    { title: 'Setting', icon: 'setting-icon.png', routerLink: '/app/setting' }
  ];

  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  menuToggle() {
    this.isMenuOpened = !this.isMenuOpened;
    if (this.isShowTitle) {
      this.isShowTitle = false;
    } else {
      setTimeout(() => {
        this.isShowTitle = true;
      }, 400);
    }
  }

  logout() {
    this.authServices.expireLoginSession();
  }

}
