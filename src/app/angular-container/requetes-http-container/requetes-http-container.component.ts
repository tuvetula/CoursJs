import { Component, OnInit, OnDestroy } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { RequetesHttpService } from "src/app/shared/services/Menus/Angular/requetes-http.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-requetes-http-container",
  template: "<router-outlet></router-outlet>",
})
export class RequetesHttpContainerComponent implements OnInit, OnDestroy {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private requeteHttpService: RequetesHttpService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(
      this.requeteHttpService.requeteHttpMenu
    );
    this.appliService.title.next('Requêtes Http');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }
}
