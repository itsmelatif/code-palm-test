import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIconComponent } from '../card-icon/card-icon.component';
import { ICardIcon } from '../../models/components.model';

@Component({
  selector: 'lib-card-step',
  standalone: true,
  imports: [CommonModule, CardIconComponent],
  templateUrl: './card-step.component.html',
  styleUrls: ['./card-step.component.scss']
})
export class CardStepComponent implements OnInit {

  @Input() items: ICardIcon[] = [];
  listItems: {id: number, items: ICardIcon[]}[] = [];

  constructor(){

  }

  ngOnInit(): void {
      this.devideItems(3);
  }

  devideItems(chunkSize: number){
    for (let i = 0; i < this.items.length; i += chunkSize) {
      const data = {
        id: i,
        items: this.items.slice(i, i + chunkSize)
      }

      this.listItems.push(data);
    }
  }

  getClassComponent(length: number): {container: string, grid: string}{
    let classContainer;
    let classGrid;

    switch(length){
      case 1:
        classContainer = 'w-full md:w-1/3';
        classGrid = 'grid-cols-1';
        break;
      case 2:
        classContainer = 'w-full md:w-2/3';
        classGrid = 'grid-cols-2';
        break;
      default:
        classContainer = 'w-3/3';
        classGrid = 'grid-cols-3';
        break;
    }

    return {
      container: `${classContainer} mx-auto relative flex items-center pt-[44px] mb-16`,
      grid: `grid md:${classGrid} md:gap-7`
    }
  }

  getClassCard(index: number): string {
    switch(index){
      case 1:
        return 'pt-20 md:pt-10';
      case 2:
        return 'pt-20 md:pt-20';
      default:
        return ''
    }
  }

}
