import { Directive, HostBinding, Input, HostListener } from "@angular/core";
@Directive({
  selector: "[monSurlignageLiaison]"
})
export class SurlignerLiaisonDirective {
  public defaultBackgroundColor: string = "orange";
  @HostBinding("style.backgroundColor") private backgroundColor: string;
  @HostBinding("style.padding") private padding: string;
  @HostBinding("class.font-weight-bold") private fontWeight: boolean;
  @Input("monSurlignageLiaison") public surligner: {
    backgroundColor: string;
    padding: string;
    fontWeight: boolean;
  };
  constructor() {}
  @HostListener("mouseenter") onMouseEnter() {
    this.backgroundColor =
      this.surligner.backgroundColor || this.defaultBackgroundColor;
    this.padding = this.surligner.padding || "10px";
    this.fontWeight = this.surligner.fontWeight || true;
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.backgroundColor = this.defaultBackgroundColor;
    this.padding = "2px";
    this.fontWeight = false;
  }
}

