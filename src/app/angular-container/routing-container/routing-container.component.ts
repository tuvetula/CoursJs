import { Component, OnInit, OnDestroy } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { RoutingService } from "src/app/shared/services/Menus/Angular/routing.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-routing-container",
  template: "<router-outlet></router-outlet>",
})
export class RoutingContainerComponent implements OnInit, OnDestroy {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private routingService: RoutingService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.routingService.routingMenu);
    this.appliService.title.next('Routing');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }
}
