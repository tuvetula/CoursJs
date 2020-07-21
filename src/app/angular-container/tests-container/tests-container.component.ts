import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestsService } from 'src/app/shared/services/Menus/Angular/tests.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-tests-container',
  template: '<router-outlet></router-outlet>',
})
export class TestsContainerComponent implements OnInit, OnDestroy {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private testsService: TestsService,
    private appliService: AppliService  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.testsService.testsMenu);
    this.appliService.title.next('Tests');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }

}
