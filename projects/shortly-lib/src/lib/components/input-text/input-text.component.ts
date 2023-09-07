import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() classText: ITypeInputText = 'primary';
  @Input() errorText = '';
  @Input() placeholder = '';
  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();

  get classInput(): string{
    let label = 'inp inp-';
    switch(this.classText){
      case ITypeInputTextEnum.danger:
        return label+ITypeInputTextEnum.danger;
      case ITypeInputTextEnum.success:
        return label+ITypeInputTextEnum.success;
      default:
        return label+ITypeInputTextEnum.primary;
    }
  }

  get displayTextError(): boolean {
    return this.classText === ITypeInputTextEnum.danger;
  }

  onInput(value: string){
    this.changeValue.emit(value);
  }
}
