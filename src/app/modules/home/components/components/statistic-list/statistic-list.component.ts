import { Component } from '@angular/core';
import { ICardIcon } from 'projects/shortly-lib/src/lib/models/components.model';

@Component({
  selector: 'app-statistic-list',
  templateUrl: './statistic-list.component.html',
  styleUrls: ['./statistic-list.component.scss']
})
export class StatisticListComponent {
  dataCard: ICardIcon[] =  [
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      pathImage: 'assets/images/detail.svg',
      title: 'Detailed Records',
      description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      pathImage: 'assets/images/customizible.svg',
      title: 'Fully Customizable',
      description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ]
}
