import { Directive, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[appTextColorGreen]",
})
export class TextColorGreenDirective implements OnInit {
  @HostBinding("style.color") private textColor: string = "#99CC00";
  constructor() {}
  ngOnInit() {}
}
