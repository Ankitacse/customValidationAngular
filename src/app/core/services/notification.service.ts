import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  /**
   * @description it will show success notification
   * @param message error messages text
   * @param action if need any button
   * @param durationTime durations of notification
   */
  showSuccess( message: string, action: string = '', durationTime: number = 0 ) {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        panelClass: ['success'],
        duration: durationTime
      });
    });
  }

  /**
   * @description it will show error notification
   * @param message error messages text
   * @param action if need any button
   * @param durationTime durations of notification
   */
  showError( message: string, action: string = 'ok', durationTime: number = 10000) {
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        panelClass: ['danger'],
        duration: durationTime
      });
    });
  }
}
