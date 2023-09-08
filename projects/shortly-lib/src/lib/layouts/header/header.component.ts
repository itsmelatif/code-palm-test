import { Component, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { TranslateModule } from "@ngx-translate/core"
@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent, ClickOutsideDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isVisible = false;
  isScrollingDown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    this.isScrollingDown = scrollY < 15 ?  false : true;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  isClose(){
    this.isVisible = !this.isVisible;
  }
}
