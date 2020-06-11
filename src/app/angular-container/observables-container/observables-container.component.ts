import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../shared/services/Menus/Angular/observable.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-observables-container',
  templateUrl: './observables-container.component.html',
  styleUrls: ['./observables-container.component.css']
})
export class ObservablesContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private observableServive: ObservableService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.observableServive.observableMenu);
    this.appliService.title.next('Observables');
  }

}
