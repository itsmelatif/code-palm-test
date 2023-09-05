import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITypeInputText, ITypeInputTextEnum } from '../../models/components.model';

@Component({
  selector: 'lib-input-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() type: ITypeInputText = 'primary';
  @Input() errorText = '';
  @Input() placeholder = ''

  get classInput(): string{
    let label = 'inp inp-';
    switch(this.type){
      case ITypeInputTextEnum.danger:
        return label+ITypeInputTextEnum.danger;
      case ITypeInputTextEnum.success:
        return label+ITypeInputTextEnum.success;
      default:
        return label+ITypeInputTextEnum.primary;
    }
  }

  get displayTextError(): boolean {
    return this.type === ITypeInputTextEnum.danger;
  }
}
