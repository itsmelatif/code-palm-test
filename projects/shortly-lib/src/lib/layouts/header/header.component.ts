import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  isClose(){
    this.isVisible = !this.isVisible;
  }
}
