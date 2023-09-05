import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLinksComponent } from '../../components/widget-links/widget-links.component';
import { ISocialMediaLinks, IWidgetFooter } from '../../models/components.model';
import { SocilaMediaListComponent } from '../../components/socila-media-list/socila-media-list.component';

@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [CommonModule, WidgetLinksComponent, SocilaMediaListComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  widgetFooterOne: IWidgetFooter = {
    title: 'Features',
    links: [
      {label: 'Link Shortening', url: '#'},
      {label: 'Branded Link', url: '#'},
      {label: 'Analytics', url: '#'}
    ]
  };

  widgetFooterTwo: IWidgetFooter = {
    title: 'Resources',
    links: [
      {label: 'Blog', url: '#'},
      {label: 'Developers', url: '#'},
      {label: 'Support', url: '#'}
    ]
  };

  widgetFooterThree: IWidgetFooter = {
    title: 'Company',
    links: [
      {label: 'About', url: '#'},
      {label: 'Our Team', url: '#'},
      {label: 'Careers', url: '#'},
      {label: 'Contact', url: '#'}
    ]
  };

  socialMediaLinks: ISocialMediaLinks[] = [
    { type: 'svg', path: '' }
  ]

}
