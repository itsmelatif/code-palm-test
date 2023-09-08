import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { ICardLink } from '../../models/components.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-card-link',
  standalone: true,
  imports: [CommonModule, TranslateModule, CardComponent, ButtonComponent],
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
})
export class CardLinkComponent implements OnInit{

  @Input() data: ICardLink = {
    rawUrl: 'string',
    shortUrl: 'string'
  }

  @Output() copyAction: EventEmitter<string> = new EventEmitter<string>();

  constructor(

  ){

  }

  ngOnInit(): void {

  }

  renderComponent(): boolean{
    return this.data.rawUrl.length > 0 && this.data.shortUrl.length > 0;
  }

  onCopy(){
    this.copyAction.emit(this.data.shortUrl);
  }
}
