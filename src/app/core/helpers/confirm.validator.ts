import { AbstractControl } from '@angular/forms';

export function MatchPassword(firstControl: string, secoundControl: string ) {
  return (AC: AbstractControl) => {
    const password = AC.get(firstControl).value;
    const confirmPassword = AC.get(secoundControl).value;
    if (password !== confirmPassword) {
      AC.get(secoundControl).setErrors({ matchPassword: true });
    }
    return null;
  };
}
