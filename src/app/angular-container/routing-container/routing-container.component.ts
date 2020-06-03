import { Component, OnInit } from "@angular/core";
import { ListMenuLeftService } from "src/app/shared/services/Menus/list-menu-left.service";
import { RoutingService } from "src/app/shared/services/Menus/Angular/routing.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-routing-container",
  templateUrl: "./routing-container.component.html",
  styleUrls: ["./routing-container.component.css"],
})
export class RoutingContainerComponent implements OnInit {
  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private routingService: RoutingService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.routingService.routingMenu);
    this.appliService.title.next('Routing');
  }
}
