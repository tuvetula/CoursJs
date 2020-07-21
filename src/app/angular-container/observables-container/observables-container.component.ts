import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableService } from '../../shared/services/Menus/Angular/observable.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-observables-container',
  template: '<router-outlet></router-outlet>',
})
export class ObservablesContainerComponent implements OnInit, OnDestroy {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private observableServive: ObservableService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.observableServive.observableMenu);
    this.appliService.title.next('Observables');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);
  }
}
