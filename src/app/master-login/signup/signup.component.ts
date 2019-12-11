import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /**
   * @description Signup Form
   */
  signUpForm = new FormGroup({
    jobTitle: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    recoveryPIN: new FormControl('', Validators.required),
    confirmRecoveryPIN: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { }
}
