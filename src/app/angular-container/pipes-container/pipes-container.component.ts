import { Component, OnInit } from "@angular/core";
import { LessonsMenuService } from "src/app/shared/services/Menus/lessons-menu.service";
import { PipeService } from "src/app/shared/services/Menus/Angular/pipe.service";
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: "app-pipes-container",
  templateUrl: "./pipes-container.component.html",
  styleUrls: ["./pipes-container.component.css"],
})
export class PipesContainerComponent implements OnInit {
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private pipesService: PipeService,
    private appliService: AppliService
  ) {}

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.pipesService.pipeMenu);
    this.appliService.title.next('Pipes');
  }
}
