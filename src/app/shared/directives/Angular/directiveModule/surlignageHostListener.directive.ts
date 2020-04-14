import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
  selector: "[monSurlignageHostListener]"
})
export class SurlignerHostListenerDirective {
  constructor(private el: ElementRef) {}
  @HostListener("mouseenter") onMouseEnter() {
    this.surligner("red","bold",5);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.surligner(null,"normal",0);
  }
  private surligner(color: string, fontWeight: string, padding: number): void {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = fontWeight;
    this.el.nativeElement.style.padding = padding + "px";
  }
}
