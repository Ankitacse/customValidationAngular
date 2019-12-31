import {catchError,  map, tap } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable, BehaviorSubject } from 'rxjs';
import { Customer } from '../../../model/customer.model';


interface IServerResponse {
  data: Customer[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

/**
 * @description Showing Customer Number 
 * @author smritimishra
 */
  getCustomer() {
    return this.http
      .get(`customers/get_customer_number`).pipe(
      map((res: any) => res)).pipe(
        catchError(err => {
          return observableThrowError(err || 'Server error');
        }
      ));
  }

/**
 * @description Listing customer
 * @author smritimishra
 */
  getAllCustomer() {
    return this.http
      .get(`customers/customer_list`).pipe(
      map((res: any) => res)).pipe(
        catchError(err => {
          return observableThrowError(err || 'Server error');
        }
      ));
  }

/**
 * @description Cteate new customer
 * @author smritimishra
 */
  createCustomer(data: any) {
    return this.http
      .post(`/api/customers`, data).pipe(
      map((res: any) => res)).pipe(
        catchError(err => {
          return observableThrowError(err || 'Server error');
        }
      ));
  }

/**
 * @description Update Customer
 * @author smritimishra
 */
  editCustomer(data: any) {
    return this.http
      .put(`/api/customers/update/${data._id}`, data).pipe(
      map((res: any) => res)).pipe(
        catchError(err => {
          return observableThrowError(err || 'Server error');
        }
      ));
  }

/**
 * @description Delete Customer
 * @author smritimishra
 */
  deleteCustomer(id: string) {
    return this.http
      .delete(`customer/delete/${id}`).pipe(
      map((res: any) => res),
      catchError(err => {
        return observableThrowError(err);
      }));
  }
}