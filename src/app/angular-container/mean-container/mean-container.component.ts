import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { MeanService } from 'src/app/shared/services/Menus/Angular/mean.service';

@Component({
  selector: 'app-mean-container',
  template: '<router-outlet></router-outlet>',
  providers: [MeanService]
})
export class MeanContainerComponent implements OnInit, OnDestroy {

  constructor(
    private aplliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private meanService: MeanService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.meanService.meanMenu);
    this.aplliService.title.next('Mean');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }

}
