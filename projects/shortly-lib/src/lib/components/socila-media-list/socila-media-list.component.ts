import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISocialMediaLinks } from '../../models/components.model';
import { SvgImageComponent } from '../svg-image/svg-image.component';

@Component({
  selector: 'lib-socila-media-list',
  standalone: true,
  imports: [CommonModule, SvgImageComponent],
  templateUrl: './socila-media-list.component.html',
  styleUrls: ['./socila-media-list.component.scss']
})
export class SocilaMediaListComponent {
  @Input() listSocialMedia: ISocialMediaLinks[] = [];
}
