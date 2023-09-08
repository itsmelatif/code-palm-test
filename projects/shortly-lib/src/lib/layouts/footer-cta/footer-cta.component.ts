import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgImageComponent } from '../../components/svg-image/svg-image.component';
@Component({
  selector: 'lib-footer-cta',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonComponent, SvgImageComponent],
  templateUrl: './footer-cta.component.html',
  styleUrls: ['./footer-cta.component.scss']
})
export class FooterCtaComponent {

}
