import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AnimationsService } from 'src/app/shared/services/Menus/Angular/animations.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-animations-container',
  templateUrl: './animations-container.component.html',
  styleUrls: ['./animations-container.component.css']
})
export class AnimationsContainerComponent implements OnInit {
  private componentName: string = "Animations"
  constructor(
    private lessonsMenuService: LessonsMenuService,
    private animationsService: AnimationsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.animationsService.animationsMenu);
    this.appliService.title.next(this.componentName);
  }

}
