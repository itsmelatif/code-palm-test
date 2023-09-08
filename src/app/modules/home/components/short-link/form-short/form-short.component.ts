import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICardLink, ITypeInputText, ITypeInputTextEnum } from 'projects/shortly-lib/src/lib/models/components.model';
import { LinkService } from '../../../services/link.service';
import { ICommonResonse } from 'src/app/models/interfaces/common-response';
import { IShortenResponse } from '../../../models/interfaces/shorten-response';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ValidationHelper } from 'projects/shortly-lib/src/lib/helper/validation';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-form-short',
  templateUrl: './form-short.component.html',
  styleUrls: ['./form-short.component.scss']
})
export class FormShortComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private linkService: LinkService,
    private translateService: TranslateService
  ){
    this.form = this.fb.group({
      link: ['', [Validators.required, ValidationHelper.validateUrl]]
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
  }

  onChangeValue(value: string){

  }

  get statusInput(): {classInp: ITypeInputText, msg: string | null} {
    if(this.form.controls['link'].valid){
      return {
        classInp: ITypeInputTextEnum.success,
        msg: ''
      }
    }

    if(this.form.controls['link'].touched && this.form.controls['link'].errors){
      return {
        classInp: ITypeInputTextEnum.danger,
        msg: ValidationHelper.showValidationMsg(this.form.controls['link'], this.translateService)
      }
    }

    return {
      classInp: ITypeInputTextEnum.primary,
      msg: ''
    }
  }

  get invalidForm(): boolean {
    return this.form.invalid;
  }

  onShorten(){
      if(this.invalidForm){
        return;
      }

      this.isLoading = true;
      const link = this.form.value.link;
      const subsShort = this.linkService.shortenUrl(link)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.form.reset();
        })
      )
      .subscribe({
        next: (res: ICommonResonse<IShortenResponse>) => {
            const item: ICardLink = {
              rawUrl: link,
              shortUrl: res.result.full_short_link
            }

            this.linkService.updateLinks(item);
        },
        error: (e) => {
          alert(e.error.error)
        }
      });

      this.subscription.push(subsShort);

  }
}
