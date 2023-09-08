import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
  selector: '[libClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();
  @Input() exCludeClickID: string = '';

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const clickedButton = target.id;
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside && clickedButton !== this.exCludeClickID) {
      this.clickOutside.emit();
    }
  }
}
