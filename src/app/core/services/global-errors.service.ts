import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorsService {
  commonErrorMessage = 'Something was wrong !!';
  constructor(private injector: Injector) { }

  /**
   * @description handle all slobal errors
   * @param error client side and server side Error object
   */
  handleError(error: Error | HttpErrorResponse) {
    const notifier = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {
      // Server side error
      const message = this.getServerErrorMessage(error);
      notifier.showError(message);
    } else {
      // Client side Error
      const message = this.getClientErrorMessage(error);
      notifier.showError(message);
    }
  }

  /**
   * @description returning client side error message
   * @param error Error object
   */
  getClientErrorMessage(error: Error): string {
    const errorMessage = error.message ? error.message : this.commonErrorMessage;
    console.error(errorMessage);
    return this.commonErrorMessage;
  }

  /**
   * @description returning server side error message
   * @param error Error object
   */
  getServerErrorMessage(error: HttpErrorResponse): string {
    return navigator.onLine ? error.message : 'No Internet Connection !!';
  }
}
