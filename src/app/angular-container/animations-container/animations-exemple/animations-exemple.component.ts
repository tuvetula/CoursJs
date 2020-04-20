import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
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
      state(
        "keyframes",
        style({
          background: "green",
          border: "3px dotted yellow",
          'border-radius': '200px'
        })
      ),
      state(
        "groups",
        style({
          background: "yellow",
          border: "3px dashed black",
          'border-radius': '50px'
        })
      ),

      transition(":enter", animate(2000)),
      transition("normal=>wild", animate(300)),
      transition("wild=>normal", animate("5s 0.5s ease-in")),
      transition(
        "* => keyframes",
        animate(
          800,
          keyframes([
            style({ background: "yellow", offset: 0 }),
            style({ background: "orange", offset: 0.2 }),
            style({ background: "yellow", offset: 0.4 }),
            style({ background: "orange", offset: 0.6 }),
            style({ background: "yellow", offset: 0.8 }),
            style({ background: "yellow", offset: 1 }),
          ])
        )
      ),
      transition("*=>groups", group([
        animate("3000ms 2000ms ease-out" , style({ background: 'yellow'})),
        animate(2000 , style({ border: "3px dashed black"})),
        animate(1000 , style({ 'border-radius': "50px"}))
      ]))
    ]),
  ],
})
export class AnimationsExempleComponent implements OnInit {
  public currentState: string = "normal";
  constructor() {}

  ngOnInit(): void {}
}
