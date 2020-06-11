import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { ConditionsBouclesService } from 'src/app/shared/services/Menus/Javascript/conditions-boucles.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-conditions-et-boucles-container',
  templateUrl: './conditions-et-boucles-container.component.html',
  styleUrls: ['./conditions-et-boucles-container.component.css']
})
export class ConditionsEtBouclesContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private conditionsEtBouclesService: ConditionsBouclesService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.conditionsEtBouclesService.conditionsBouclesMenu);
    this.appliService.title.next('Conditions et Boucles');
  }
}
