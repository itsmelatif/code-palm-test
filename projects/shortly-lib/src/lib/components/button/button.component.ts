import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITypeButton } from '../../models/components.model';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: ITypeButton | undefined;

  get classButton(){
    return 'btn '+this.type+ ' is-active-mobile';
  }
}
