import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static ValidateId(control: AbstractControl) {
    const value = control.value as string;

    if (value.includes('test')) {
      return {
        invalidName: true,
      };
    }

    return null;
  }

  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const value = control.value as string;

      if (value.includes(char)) {
        return {
          invalidSpecialChar: true,
        };
      }

      return null;
    };
  }

  static ValidateSum(control: FormGroup) {
    const forecastedSum = control.get('forecastedSum')?.value as number;
    const currentSum = control.get('currentSum')?.value as number;
    // console.log(forecastedSum, currentSum);
    if (forecastedSum <= currentSum) {
      control.get('forecastedSum')?.setErrors({
        invalidForecastedSum: true,
      })

      return {
        invalidForecastedSum: true,
      };
    }

    return null;
  }
}
