import { AbstractControl, FormControl } from "@angular/forms";
import {TranslateService} from '@ngx-translate/core';

export class ValidationHelper {


  static validateUrl(control: FormControl) {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    const valid = urlPattern.test(control.value);

    return valid ? null : { invalidUrl: true };
  }

  static showValidationMsg(formControl: AbstractControl | FormControl, translateService: TranslateService): string | null {
    let error = null;

    if (formControl.errors) {
      const firstKey = Object.keys(formControl.errors)[0];

      switch (firstKey) {
        case 'required':
          error = translateService.instant('required_input_err')
          break;
        case 'invalidUrl':
          error = translateService.instant('invalid_input_url')
          break;
        default:
          error = formControl.errors[firstKey];
          break;
      }
    }

    return error
  }
}

