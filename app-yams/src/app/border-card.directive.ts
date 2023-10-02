import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  @Input('appBorderCard') borderColor: string = "#f5f5f5";

  constructor(private el : ElementRef) {
    this.setColor("#f5f5f5");
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.borderColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setColor("#f5f5f5");
  }

  setColor(color: string) {
    this.el.nativeElement.style.border = `solid 1px ${color}`;
  }


}
