import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[budgetEmailValidator]',
  providers: [
    {
      // it is injection token, provide our validattor to already existing validators
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true, // because it is an array of all validators
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true,
      }
    }

    return null;
  }
}
