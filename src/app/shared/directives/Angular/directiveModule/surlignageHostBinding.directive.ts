import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";
@Directive({
  selector: "[monSurlignageHostBinding]"
})
export class SurlignerHostBindingDirective implements OnInit {
  @HostBinding("style.backgroundColor") private backgroundColor: string;
  @HostBinding("style.color") private color: string;
  @HostBinding("style.padding") private padding: string;
  @HostBinding("class.font-weight-bold") private fontWeight: boolean;
  
  constructor() {}
  @HostListener("click") onClick() {
    this.backgroundColor === "green"
      ? (this.backgroundColor = "red")
      : (this.backgroundColor = "green");
    this.color === "white" ? (this.color = "black") : (this.color = "white");
    this.fontWeight = !this.fontWeight;
  }
  ngOnInit(){
    this.backgroundColor = "red";
    this.padding = "5px";
    this.fontWeight = false;
  }
}

