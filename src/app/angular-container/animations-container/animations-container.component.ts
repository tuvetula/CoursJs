import { Component, OnInit, OnDestroy } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AnimationsService } from 'src/app/shared/services/Menus/Angular/animations.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-animations-container',
  template: '<router-outlet></router-outlet>',
})
export class AnimationsContainerComponent implements OnInit, OnDestroy {
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
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }

}
