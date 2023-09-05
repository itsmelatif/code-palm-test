import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'lib-footer-cta',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './footer-cta.component.html',
  styleUrls: ['./footer-cta.component.scss']
})
export class FooterCtaComponent {

}
