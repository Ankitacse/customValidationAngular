import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const formValidationMessages = {
  jobTitle: [
    { type: 'required', message: 'Job title is required' }
  ],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Please Enter a valid email' }
  ],
  userName: [
    { type: 'required', message: 'Username is required' }
  ],
  firstName: [
    { type: 'required', message: 'First name is required' }
  ],
  lastName: [
    { type: 'required', message: 'Last name is required' }
  ],
  password: [
    { type: 'required', message: 'Password is required' }
  ],
  confirmPassword: [
    { type: 'required', message: 'Confirm Password is required' }
  ],
  recoveryPIN: [
    { type: 'required', message: 'Recovery PIN is required' }
  ],
  confirmRecoveryPIN: [
    { type: 'required', message: 'Confirm Recovery PIN is required' }
  ]
};
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

  /**
   * @description getter for FormControl
   */
  get jobTitle() { return this.signUpForm.get('jobTitle'); }
  get email() { return this.signUpForm.get('email'); }
  get userName() { return this.signUpForm.get('userName'); }
  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }
  get recoveryPIN() { return this.signUpForm.get('recoveryPIN'); }
  get confirmRecoveryPIN() { return this.signUpForm.get('confirmRecoveryPIN'); }

  /**
   * @description Login Validation Message
   */
  signUpFormValidationMessages = formValidationMessages;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { }
}
