import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITypeButton } from '../../models/components.model';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input() label = '';
  @Input() type: ITypeButton | undefined;
  @Input() isLoading = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = changes['isLoading'].currentValue;
  }

  get classButton(){
    return 'btn '+this.type+ ' is-active-mobile';
  }
}
