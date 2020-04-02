import { Directive, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[appCodeFormat]"
})
export class CodeFormatDirective {
  @HostBinding("style.fontWeight") private fontWeight: string;
  @HostBinding("style.fontFamily") private fontFamily: string;
  @HostBinding("style.fontSize") private fontSize: string;

  constructor() {
    this.fontWeight = "bold";
    this.fontFamily = "monospace";
    this.fontSize = "1.2em";
  }
}
