import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[appCodeFormat]",
})
export class CodeFormatDirective {
  @HostBinding("style.fontWeight") private fontWeight: string;
  @HostBinding("style.fontFamily") private fontFamily: string;
  @HostBinding("style.fontSize") private fontSize: string;
  @HostBinding("style.border") private border: string;
  @HostBinding("style.padding") private padding: string;

  constructor() {
    this.fontWeight = "bold";
    this.fontFamily = "monospace";
    this.fontSize = "1.2em";
    //this.border = "solid 1px red";
    //this.padding = "10px";
  }
}
