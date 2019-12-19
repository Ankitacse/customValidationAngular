import { AbstractControl } from '@angular/forms';

export function MatchValidator(firstControl: string, secoundControl: string ) {
  return (AC: AbstractControl) => {
    const control1 = AC.get(firstControl).value;
    const control2 = AC.get(secoundControl).value;
    if (control1 !== control2) {
      AC.get(secoundControl).setErrors({ matchValidator: true });
    }
    return null;
  };
}
