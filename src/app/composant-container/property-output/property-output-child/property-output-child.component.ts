import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-property-output-child",
  templateUrl: "./property-output-child.component.html",
  styleUrls: ["./property-output-child.component.css"]
})
export class PropertyOutputChildComponent implements OnInit {
  @Input("compteurValue") compteur: number;
  @Output() public changeCount: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  add(): void {
    this.changeCount.emit(this.compteur + 1);
  }
  remove(): void {
    this.changeCount.emit(this.compteur - 1);
  }
}

