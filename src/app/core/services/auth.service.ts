import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient, private router: Router) { }

  login(input: any): Observable<any> {
    return this.httpClient
      .post(`users/login`, input)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  checkSession(): boolean {
    return !!(localStorage.getItem('token'));
  }

  expireLoginSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/user']);
  }
}
