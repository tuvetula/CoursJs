import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: "[monSurlignage]"
})
export class SurlignerDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.fontWeight = "bold";
    el.nativeElement.style.padding = "5px";
  }
}
