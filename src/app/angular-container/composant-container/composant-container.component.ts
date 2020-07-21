import { Component, OnInit, OnDestroy } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { ComposantService } from "src/app/shared/services/Menus/Angular/composant.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-composant-container",
  template: "<router-outlet></router-outlet>",
})
export class ComposantContainerComponent implements OnInit, OnDestroy {
  private componentName: string = "Composants"

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private ComposantService: ComposantService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.ComposantService.composantMenu);
    this.appliService.title.next(this.componentName);
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }
}
