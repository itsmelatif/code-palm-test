import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ComponentsService } from '../../services/components.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-svg-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss']
})
export class SvgImageComponent implements OnInit,  OnDestroy {
  @Input() urlPath: string = '';
  svgContent!: SafeHtml;
  subscription: Subscription[] = []

  constructor(
    private componentService: ComponentsService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadSvgFile(this.urlPath);
  }

  ngOnDestroy(): void {
      this.subscription.forEach(el => el.unsubscribe());
  }

  loadSvgFile(filePath: string) {
    const subsSvg = this.componentService.loadSvg(filePath).subscribe({
      next: (data) => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      error: (error) => {
        console.error('Error loading SVG file:', error);
      }
    })

    this.subscription.push(subsSvg);
  }
}
