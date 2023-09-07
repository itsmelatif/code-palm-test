import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICardLink, ITypeInputText, ITypeInputTextEnum } from 'projects/shortly-lib/src/lib/models/components.model';
import { LinkService } from '../../../services/link.service';
import { ICommonResonse } from 'src/app/models/interfaces/common-response';
import { IShortenResponse } from '../../../models/interfaces/shorten-response';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-form-short',
  templateUrl: './form-short.component.html',
  styleUrls: ['./form-short.component.scss']
})
export class FormShortComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private linkService: LinkService
  ){
    this.form = this.fb.group({
      link: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
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

    onShorten(){
      const link = this.form.value.link;
      const subsShort = this.linkService.shortenUrl(link).subscribe({
        next: (res: ICommonResonse<IShortenResponse>) => {
            const item: ICardLink = {
              rawUrl: link,
              shortUrl: res.result.full_short_link
            }

            this.linkService.updateLinks(item);
        },
        error: (e) => {
          alert(e)
        }
      });

      this.subscription.push(subsShort);

    }
}
