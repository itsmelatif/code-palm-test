import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { ICardLink } from '../../models/components.model';

@Component({
  selector: 'lib-card-link',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
})
export class CardLinkComponent implements OnInit{

  @Input() data: ICardLink = {
    rawUrl: 'string',
    shortUrl: 'string'
  }

  constructor(){

  }

  ngOnInit(): void {

  }

  renderComponent(): boolean{
    return this.data.rawUrl.length > 0 && this.data.shortUrl.length > 0;
  }

  onCopy(){
    alert('copy');
  }
}
