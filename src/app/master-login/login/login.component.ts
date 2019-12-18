import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';

/**
 * @description validation error message og login form
 */
const loginFormMessage = {
  userName: [
    { type: 'required', message: 'Email is required' }
  ],
  password: [
    { type: 'required', message: 'Password is required' }
  ]
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginLoader = false;
  /**
   * @description Login Form
   */
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  /**
   * @description getter for FormControl
   */
  get userName() { return this.loginForm.get('userName'); }
  get password() { return this.loginForm.get('password'); }

  /**
   * @description Login Validation Message
   */
  loginValidationMessages = loginFormMessage;

  constructor(
    private router: Router,
    public authService: AuthService,
    private notificationService: NotificationService
    ) { }

  ngOnInit() {
  }

  /**
   * @description submit login form
   */
  onSubmit() {
    this.loginLoader = true;
    this.authService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.notificationService.showSuccess('Login Successfully', '', 3000);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user);
        this.router.navigate(['/app']);
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
}
