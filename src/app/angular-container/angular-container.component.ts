import { Component, OnInit } from "@angular/core";
import { AngularService } from "../shared/services/Angular/angular.service";

@Component({
  selector: "app-angular-container",
  templateUrl: "./angular-container.component.html",
  styleUrls: ["./angular-container.component.css"],
})
export class AngularContainerComponent implements OnInit {
  public serviceName: string = "Angular";
  public menu: { name: string; url: string }[];

  constructor(private angularService: AngularService) {}

  ngOnInit(): void {
    this.menu = this.angularService.angularMenu;
  }
}
