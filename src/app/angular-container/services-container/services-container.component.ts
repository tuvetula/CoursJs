import { Component, OnInit, OnDestroy } from "@angular/core";
import { ServicesService } from "src/app/shared/services/Menus/Angular/services.service";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-services-container",
  template: "<router-outlet></router-outlet>",
})
export class ServicesContainerComponent implements OnInit, OnDestroy {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private servicesService: ServicesService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.servicesService.serviceMenu);
    this.appliService.title.next('Services');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }
}
