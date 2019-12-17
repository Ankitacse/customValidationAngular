import { Component, OnInit, AfterViewInit } from '@angular/core';
import { listAnimation } from 'src/app/core/animations/trigger';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [listAnimation]
})
export class CustomersComponent implements OnInit, AfterViewInit {
  items = [];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }, 10);
  }

  ngAfterViewInit() {

  }

}
