import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-variable-locale-children",
  templateUrl: "./variable-locale-children.component.html",
  styleUrls: ["./variable-locale-children.component.css"]
})
export class VariableLocaleChildrenComponent implements OnInit {
  public compteurValue: number;
  constructor() {}
  ngOnInit(): void {
    this.compteurValue = 0;
  }
  add(): void {
    this.compteurValue += 1;
  }
  remove(): void {
    this.compteurValue -= 1;
  }
}
