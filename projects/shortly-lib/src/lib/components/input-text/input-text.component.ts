import { Component, EventEmitter, Input, Output, OnInit, Optional, Self, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITypeInputText, ITypeInputTextEnum } from '../../models/components.model';
import { ControlValueAccessor, FormControl, ReactiveFormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() classText: ITypeInputText = 'primary';
  @Input() errorText = '';
  @Input() placeholder = '';

  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();


  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get currentFormControl(): FormControl {
    return this.ngControl.control as FormControl;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.classText = changes['classText']?.currentValue;
    this.errorText = changes['errorText']?.currentValue;
  }

  writeValue(value: string | string[]): void {

  }

  registerOnChange(onChange: (value: string | string[]) => void): void {

  }

  registerOnTouched(onTouched: () => void): void {

  }

  markAsTouched(): void {

  }


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
