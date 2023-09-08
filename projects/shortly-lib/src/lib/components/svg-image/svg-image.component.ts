import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'lib-svg-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss']
})
export class SvgImageComponent {
  svgContent!: SafeHtml;
  @Input() urlPath: string = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadSvgFile(this.urlPath);
  }

  loadSvgFile(filePath: string) {
    this.http.get(filePath, { responseType: 'text' }).subscribe(
      (data) => {
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      (error) => {
        console.error('Error loading SVG file:', error);
      }
    );
  }
}
