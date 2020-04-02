import { Component, OnInit, ViewChild } from "@angular/core";
import { ViewChildChildrenComponent } from "./view-child-children/view-child-children.component";

@Component({
  selector: "app-view-child",
  templateUrl: "./view-child.component.html",
  styleUrls: ["./view-child.component.css"]
})
export class ViewChildComponent implements OnInit {
  @ViewChild(ViewChildChildrenComponent, { static: true })
  private compteur: ViewChildChildrenComponent;
  constructor() {}

  ngOnInit(): void {}
  decrementer() {
    setTimeout(() => this.compteur.remove(), 1000);
  }
  incrementer() {
    setTimeout(() => this.compteur.add(), 1000);
  }
}
