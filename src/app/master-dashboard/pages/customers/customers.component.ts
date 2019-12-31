/* import { Component, OnInit, AfterViewInit } from '@angular/core';
import { listAnimation } from 'src/app/core/animations/trigger';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [listAnimation]
})
export class CustomersComponent implements OnInit {
  items = [];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }, 10);
  }
} */

import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customers.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer.model';
import { tap, map } from 'rxjs/operators';
//import { Repair } from 'src/app/model/repair.model';
//import { UtilitiesService } from 'src/app/common/utilities.service';
//import { MessageService } from 'primeng/api';
import { listAnimation } from 'src/app/core/animations/trigger';

interface IServerResponse {
  data: Customer[];
  total: number;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [listAnimation]
})
export class CustomersComponent implements OnInit {
  filterCustomer: any;
  p = 1;
  total: number;
  loading: boolean;
  public meta: any = {};
  keyword = '';
  nSortBy = '';
  vSortBy = '';
  deleteId = null;
  allCustomer = [];
  exportLoader = true;
  customerNumber: string;

  constructor(
    private customerService: CustomerService,
    // private uitilities: UtilitiesService,
    //private messageService: MessageService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.loading = true;
      // this.getPage(1);
      this.getAllcustomer();
      this.getCustomerNumber();
    }, 10);
  }

  /**
   * @description Get all customer list for export to CSV only
   */
  getAllcustomer() {
    this.exportLoader = true;
    this.customerService.getAllCustomer().subscribe(
      (res: any) => {
        this.allCustomer = res;
        this.exportLoader = false;
      },
      (error: any) => {
        this.exportLoader = false;
      }
    );
  }

  /**
    * @description Get Customer Number
    */
  getCustomerNumber() {
    this.exportLoader = true;
    this.customerService.getCustomer().subscribe(
      (res: any) => {
        this.customerNumber = res;
        this.exportLoader = false;
      },
      (error: any) => {
        this.exportLoader = false;
      }
    );
  }

  showLivetimeValue(val) {
    if (!val) {
      return '0.00';
    }
    return Number(val).toFixed(2);
  }
  /* 
    getPage(page: number) {
      this.clearSortStates();
      this.loading = true;
      this.serverCall(page)
        .pipe(
          tap(res => {
            this.total = res.total;
            this.p = page;
          }),
          map(res => res.data)
        )
        .subscribe((data: any) => {
          const allData = data.map(async (el: any) => {
            const val = await this.getRepairValue(el._id);
            el['livevalue'] = val ? val : 0;
            return el;
          });
          // tslint:disable-next-line:no-shadowed-variable
          Promise.all(allData).then((data: any) => {
            this.filterCustomer = data;
            this.loading = false;
          });
        });
    }
   */
  /**
   * Calculates the repair value with the associated customer
   * @todo Calculate the total orders value plus total repairs (partially done)
   * @param id *{string} customerID
   */
  /*  async getRepairValue(id: string): Promise<number> {
     try {
       const res: any = await this.customerService
         .getCustomerRepairs(id)
         .toPromise();
 
       if (res.data.length > 0) {
         const vals = res.data.map((el: Repair) => {
           return el.finalCost ? el.finalCost : el.estimatedCost;
         });
 
         return vals.reduce((a: number, b: number) => a + b, 0);
       }
     } catch (error) {
       return error;
     }
   }
 
   serverCall(page: number): Observable<IServerResponse> {
     const param = {
       keyword: this.keyword,
       perPage: 10,
       pageNo: page
     };
     return this.customerService.getCustomers(param);
   }
 
   formatMobile(num: string) {
     return this.uitilities.formatMobile(num);
   } */
  /* 
    sortByName() {
      if (this.nSortBy === '') {
        this.loading = true;
        this.clearSortStates();
        this.nSortBy = 'as';
        this.filterCustomer.sort((a, b) => {
          const aName = a.firstName.toUpperCase();
          const bName = b.firstName.toUpperCase();
          if (aName < bName) {
            this.loading = false;
            return -1;
          }
          // names must be equal
          return 0;
        });
      } else if (this.nSortBy === 'as') {
        this.loading = true;
        this.nSortBy = 'ds';
        this.filterCustomer.sort((a, b) => {
          const aName = a.firstName.toUpperCase();
          const bName = b.firstName.toUpperCase();
          if (aName > bName) {
            this.loading = false;
            return -1;
          }
          // names must be equal
          return 0;
        });
      } else if (this.nSortBy === 'ds') {
        this.clearSortStates();
        this.getPage(this.p);
      }
    }
   */
  /*  sortByValue() {
     if (this.vSortBy === '') {
       this.loading = true;
       this.clearSortStates();
       this.vSortBy = 'as';
       this.filterCustomer = this.filterCustomer.sort((a, b) => {
         this.loading = false;
         return a['livevalue'] - b['livevalue'];
       });
     } else if (this.vSortBy === 'as') {
       this.vSortBy = 'ds';
       this.loading = true;
       this.filterCustomer = this.filterCustomer.sort((a, b) => {
         this.loading = false;
         return b['livevalue'] - a['livevalue'];
       });
     } else if (this.vSortBy === 'ds') {
       this.clearSortStates();
       this.getPage(this.p);
     }
   }
  */
  /*  clearSortStates() {
     this.vSortBy = '';
     this.nSortBy = '';
   }
  */
  /*  showDeleteConfirm(id: string) {
     this.deleteId = id;
     this.messageService.clear();
     this.messageService.add({
       key: 'c',
       sticky: true,
       severity: 'warn',
       summary: 'Are you sure you want to delete?',
       detail: 'Confirm to proceed'
     });
   }
  */
  /*  deleteCustomer() {
     this.customerService.deleteCustomer(this.deleteId).subscribe(res => {
       if (res.success) {
         this.getPage(this.p);
       }
       this.messageService.clear();
     });
   }
  */
  /*  onReject() {
     this.messageService.clear('c');
   }
  */
  /* exportToCSV() {
    if (Array.isArray(this.allCustomer)) {
      const customers = this.allCustomer.map(cus => {
        const obj = {
          'Customer Number': cus.customerNumber,
          'First Name': cus.firstName,
          'Last Name': cus.lastName,
          'Full Name': cus.fullName,
          Email: cus.email ? cus.email : '',
          'Email Opt In': cus.emailOptIn,
          Address: cus.address,
          Birthday: cus.birthday ? new Date(cus.birthday).toDateString() : cus.birthday,
          'Mobile Phone': cus.mobilePhone ? cus.mobilePhone : '',
          'Home Phone': cus.homePhone ? cus.homePhone : '',
          'Work Phone': cus.workPhone ? cus.workPhone : '',
          'Spouse Full Name': cus.spouseFullName,
          'Spouse Birthday': cus.spouseBirthday ? new Date(cus.spouseBirthday).toDateString() : cus.spouseBirthday,
          Created: cus.created ? new Date(cus.created).toDateString() : cus.created,
          Livevalue: cus.livevalue ? cus.livevalue : ''
        };
        return obj;
      });
      this.uitilities.JSONToCSVConvertor(customers, true, 'Customers');
    }
  } */
}