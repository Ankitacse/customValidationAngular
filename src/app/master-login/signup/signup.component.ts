import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchValidator } from 'src/app/core/helpers/confirm.validator';
import { signUpformValidationMessages } from 'src/app/core/constant/validation-form.constant';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';
import { mimeType } from 'src/app/core/helpers/mime-type.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isEyeVisible = true;
  loginLoader = false;
  imagePreview: any = 'assets/images/user.svg';
  /**
   * @description Signup Form
   */
  signUpForm = new FormGroup({
    jobTitle: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', Validators.required),
    image: new FormControl('', {
      validators: [Validators.required]
      , asyncValidators: [mimeType]
    }),
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

  constructor(private authService: AuthService,
    private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
  }
  /**
   * @description:image picker
   */
  onImagePicked(event: Event) {
    //image store
    const file = (event.target as HTMLInputElement).files[0];
    this.signUpForm.patchValue({ image: file });
    this.signUpForm.get('image').updateValueAndValidity();
    //image preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /**
   * @description:to submit signup form 
   */
  onSubmit() {
    console.log('form', this.signUpForm);
    this.authService.createUser(this.signUpForm.value).subscribe((res: any) => {
      this.notificationService.showSuccess('SignUp Successfully', '', 3000);
      this.router.navigate(['/user']);
      this.loginLoader = false;
    },
      (error) => {
        this.loginLoader = false;
        if (error.status === 400) {
          this.notificationService.showError(error.error.msg, '', 3000);
        } else {
          this.notificationService.showError(error.statusText, '', 3000);
        }
      }
    );
  }

  /**
   * @description toggle visibility
   */
  isVisible() {
    this.isEyeVisible = !this.isEyeVisible;
  }
}
