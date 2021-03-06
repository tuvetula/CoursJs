import { Component, OnInit, OnDestroy } from "@angular/core";
import { DirectiveService } from "src/app/shared/services/Menus/Angular/directive.service";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { AppliService } from "src/app/shared/services/Menus/appli.service";

@Component({
  selector: "app-directive-container",
  template: "<router-outlet></router-outlet>",
})
export class DirectiveContainerComponent implements OnInit, OnDestroy {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private directivesService: DirectiveService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(
      this.directivesService.directiveMenu
    );
    this.appliService.title.next("Directives");
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }
}
