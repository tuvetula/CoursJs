import { Component, OnInit } from '@angular/core';
import { CanvasService } from 'src/app/shared/services/Menus/Javascript/canvas.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-canvas-container',
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.css'],
  providers: [CanvasService]
})
export class CanvasContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private canvasService: CanvasService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.canvasService.canvasMenu);
    this.appliService.title.next('Canvas');
  }

}
