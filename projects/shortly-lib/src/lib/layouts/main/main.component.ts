import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterCtaComponent } from '../footer-cta/footer-cta.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'lib-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterCtaComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
