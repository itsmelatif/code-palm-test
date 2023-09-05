import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWidgetFooter } from '../../models/components.model';

@Component({
  selector: 'lib-widget-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-links.component.html',
  styleUrls: ['./widget-links.component.scss']
})
export class WidgetLinksComponent {
  @Input() data: IWidgetFooter = {
    title: '',
    links: []
  };

}
