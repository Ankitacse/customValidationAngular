import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchValidator } from 'src/app/core/helpers/confirm.validator';
import { signUpformValidationMessages } from 'src/app/core/constant/validation-form.constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isEyeVisible = true;

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
    confirmPassword: new FormControl('', [Validators.required]),
    recoveryPIN: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]),
    confirmRecoveryPIN: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)])
  },
    {
      validators: [
        MatchValidator('password', 'confirmPassword'),
        MatchValidator('recoveryPIN', 'confirmRecoveryPIN')
      ]
    }
  );

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
  signUpFormValidationMessages = signUpformValidationMessages;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { }

  /**
   * @description toggle visibility
   */
  isVisible() {
    this.isEyeVisible = !this.isEyeVisible;
  }
}
