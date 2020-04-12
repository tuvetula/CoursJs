import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/list-menu-left.service";
import { RoutingService } from "src/app/shared/services/Angular/routing.service";
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: "app-routing-container",
  templateUrl: "./routing-container.component.html",
  styleUrls: ["./routing-container.component.css"],
})
export class RoutingContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private routingService: RoutingService,
    private angularService: AngularService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.routingService.routingMenu);
    this.angularService.title.next('Routing');
  }
}
