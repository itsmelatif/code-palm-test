import { AbstractControl, FormControl } from "@angular/forms";

export class ValidationHelper {

  static validateUrl(control: FormControl) {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    const valid = urlPattern.test(control.value);

    return valid ? null : { invalidUrl: true };
  }

  static showValidationMsg(formControl: AbstractControl | FormControl): string | null {
    let error = null;

    if (formControl.errors) {
      const firstKey = Object.keys(formControl.errors)[0];

      switch (firstKey) {
        case 'required':
          error = 'This input field is required';
          break;
        case 'invalidUrl':
          error = 'This is not valid url';
          break;
        default:
          error = formControl.errors[firstKey];
          break;
      }
    }

    return error
  }
}

