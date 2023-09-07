import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITypeInputText, ITypeInputTextEnum } from 'projects/shortly-lib/src/lib/models/components.model';

@Component({
  selector: 'app-form-short',
  templateUrl: './form-short.component.html',
  styleUrls: ['./form-short.component.scss']
})
export class FormShortComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      link: ['', [Validators.required]]
    })
  }

  onChangeValue(value: string){
    this.form.patchValue({link: value});
    console.log(this.form);
  }

  get errorForm(): {status: ITypeInputText, msg: string} {
    if(!this.form.controls['link'].errors){
      return {
        status: ITypeInputTextEnum.success,
        msg: ''
      }
    }

    if(this.form.controls['link'].errors['required']){
      return {
        status: ITypeInputTextEnum.danger,
        msg: 'This input field is required'
      }
    }else{
      return {
        status: ITypeInputTextEnum.danger,
        msg: 'This input field is required'
      }
      }
    }
}
