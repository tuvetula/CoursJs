import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { MaterialService } from 'src/app/shared/services/Menus/Angular/material.service';

@Component({
  selector: 'app-material-container',
  template: '<router-outlet></router-outlet>',
})
export class MaterialContainerComponent implements OnInit, OnDestroy {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.materialService.materialMenu);
    this.appliService.title.next('Material');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }

}
