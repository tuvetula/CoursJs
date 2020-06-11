import { Component, OnInit } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { RoutingService } from "src/app/shared/services/Menus/Angular/routing.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-routing-container",
  templateUrl: "./routing-container.component.html",
  styleUrls: ["./routing-container.component.css"],
})
export class RoutingContainerComponent implements OnInit {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private routingService: RoutingService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.routingService.routingMenu);
    this.appliService.title.next('Routing');
  }
}
