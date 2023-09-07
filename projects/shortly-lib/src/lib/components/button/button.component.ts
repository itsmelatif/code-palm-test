import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITypeButton } from '../../models/components.model';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() label = '';
  @Input() type: ITypeButton | undefined;
  @Input() isLoading = false;
  @Input() fullMobile = false;


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = changes['isLoading']?.currentValue;
  }
}
