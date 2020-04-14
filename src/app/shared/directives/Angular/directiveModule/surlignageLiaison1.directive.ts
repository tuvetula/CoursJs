import { Directive,HostBinding,Input,OnInit } from "@angular/core";
@Directive({
  selector: "[monSurlignageLiaison1]"
})
export class SurlignerLiaison1Directive implements OnInit {
  @HostBinding("style.backgroundColor") private backgroundColor: string;
  @HostBinding("style.color") private color: string;
  @Input("monSurlignageLiaison1") public surligner: string;
  constructor() {}
  ngOnInit() {
    this.backgroundColor = this.surligner;
    this.color = "white";
  }
}


