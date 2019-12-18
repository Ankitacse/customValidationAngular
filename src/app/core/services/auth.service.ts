import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) { }

  login(input: any): Observable<any> {
    return this.httpClient
      .post(`users/login`, input)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
