import { Directive, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[appTextColorGreen]"
})
export class TextColorGreenDirective implements OnInit {
  @HostBinding("style.color") private textColor: string;
  constructor() {}
  ngOnInit() {
    this.textColor = "green";
  }
}
