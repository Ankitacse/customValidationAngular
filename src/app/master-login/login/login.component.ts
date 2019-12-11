import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * @description Login Form
   */
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  /**
   * @description getter for FormControl
   */
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  /**
   * @description Login Validation Message
   */
  loginValidationMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please Enter a valid email' }
    ],
    password: [
      { type: 'required', message: 'Password is required' }
    ]
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * @description submit login form
   */
  onSubmit() {
    console.log(this.loginForm.value);

    
    this.router.navigate(['/app']);
  }
}
