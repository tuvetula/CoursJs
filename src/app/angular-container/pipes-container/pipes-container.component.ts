import { Component, OnInit, OnDestroy } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { PipeService } from "src/app/shared/services/Menus/Angular/pipe.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-pipes-container",
  template: "<router-outlet></router-outlet>",
})
export class PipesContainerComponent implements OnInit, OnDestroy {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private pipesService: PipeService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.pipesService.pipeMenu);
    this.appliService.title.next('Pipes');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }
}
