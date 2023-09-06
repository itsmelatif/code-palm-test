import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgImageComponent } from '../svg-image/svg-image.component';
import { ICardIcon } from '../../models/components.model';

@Component({
  selector: 'lib-card-icon',
  standalone: true,
  imports: [CommonModule, SvgImageComponent],
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent {
  @Input() item: ICardIcon = {
    pathImage: '',
    title: '',
    description: ''
  }

  get visibleCard (){
    return this.item.pathImage.length > 0 ||
    this.item.title.length > 0 ||
    this.item.description.length > 0;
  }

}
