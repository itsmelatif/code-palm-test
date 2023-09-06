import { Component } from '@angular/core';
import { ICardIcon } from 'projects/shortly-lib/src/lib/models/components.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-palm-test-shortly';
  dataCard: ICardIcon[] =  [
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition 4',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      pathImage: 'assets/images/chart.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    }
  ]
}
