import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-animations-exemple",
  templateUrl: "./animations-exemple.component.html",
  styleUrls: ["./animations-exemple.component.css"],
  animations: [
    trigger("square", [
      state(
        "normal",
        style({
          "background-color": "red",
          border: "1px solid black",
        })
      ),
      state(
        "wild",
        style({
          "background-color": "green",
          border: "0px",
          "border-radius": "100px",
        })
      ),
      transition(":enter", animate(5000)),
      transition("normal=>wild", animate(300)),
      transition("wild=>normal", animate('5s 0.5s ease-in')),
    ]),
  ],
})
export class AnimationsExempleComponent implements OnInit {
  public currentState: string = "normal";
  constructor() {}

  ngOnInit(): void {}
}
