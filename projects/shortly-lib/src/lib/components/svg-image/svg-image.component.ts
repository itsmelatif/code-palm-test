import { Component } from '@angular/core';
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

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadSvgFile('projects/shortly-lib/src/lib/assets/images/instagram.svg'); // Adjust the path to your SVG file
  }

  loadSvgFile(filePath: string) {
    this.http.get(filePath, { responseType: 'text' }).subscribe(
      (data) => {
        // Sanitize the SVG content
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
      },
      (error) => {
        console.error('Error loading SVG file:', error);
      }
    );
  }
}
