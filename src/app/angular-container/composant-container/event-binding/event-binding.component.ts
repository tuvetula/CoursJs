import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"]
})
export class EventBindingComponent implements OnInit {
  public inputValue: string;
  public divColor: string;

  constructor() {
    this.divColor = "red";
  }
  ngOnInit(): void {}

  public onClick(event: Event): void {
    this.divColor = "blue";
  }

  public changeColor(color: string): void {
    this.divColor = color;
  }

  public changeInputValue(value: string): void {
    this.inputValue = value;
  }
}

