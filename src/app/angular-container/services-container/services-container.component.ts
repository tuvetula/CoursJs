import { Component, OnInit } from "@angular/core";
import { ServicesService } from "src/app/shared/services/Menus/Angular/services.service";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-services-container",
  templateUrl: "./services-container.component.html",
  styleUrls: ["./services-container.component.css"],
})
export class ServicesContainerComponent implements OnInit {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private servicesService: ServicesService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.servicesService.serviceMenu);
    this.appliService.title.next('Services');
  }
}
