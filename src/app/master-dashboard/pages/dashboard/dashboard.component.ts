import { Component, OnInit } from '@angular/core';
import { listAnimation, slideInUp } from 'src/app/core/animations/trigger';

const modificationArray = [
  {title: 'Customer', icon: 'customer-mg-icon', count: 1789},
  {title: 'Appraisal', icon: 'appraisal-mg-icon', count: 1789},
  {title: 'Repair', icon: 'repair-mg-icon', count: 1789}
];

const overview = [
  {icon : 'small-icon1', count: '10,555', title: 'Total Customers', class: ''},
  {icon : 'small-icon2', count: '10,555', title: 'Total Appraisals', class: 'crd-icon-orange-bg'},
  {icon : 'small-icon3', count: '10,555', title: 'Total Repairs', class: 'crd-icon-green-bg'},
  {icon : 'small-icon4', count: '10,555', title: 'Open Repairs', class: 'crd-icon-red-bg'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    listAnimation,
    slideInUp
  ]
})
export class DashboardComponent implements OnInit {
  totalAnimation = -1;
  items = [];
  lastModification = [];
  overview = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.items = [1, 2, 3, 4, 5];
      this.lastModification = modificationArray;
      this.overview = overview;
    }, 10);
  }

}
