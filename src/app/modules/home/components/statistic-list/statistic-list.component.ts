import { Component } from '@angular/core';
import { ICardIcon } from 'projects/shortly-lib/src/lib/models/components.model';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.scss']
})
export class StatisticListComponent {

  dataCard: ICardIcon[] =  [];

  constructor(
    private translateService: TranslateService
  ){

    const list = [
      {
        pathImage: 'assets/images/icon-brand-recognition.svg',
        title: this.translateService.instant('statistic_title_1'),
        description: this.translateService.instant('statistic_desc_1')
      },
      {
        pathImage: 'assets/images/icon-detailed-records.svg',
        title: this.translateService.instant('statistic_title_2'),
        description: this.translateService.instant('statistic_desc_2')
      },
      {
        pathImage: 'assets/images/icon-fully-customizable.svg',
        title: this.translateService.instant('statistic_title_3'),
        description: this.translateService.instant('statistic_desc_3')
      }
    ]

    this.dataCard = list;

  }

}
