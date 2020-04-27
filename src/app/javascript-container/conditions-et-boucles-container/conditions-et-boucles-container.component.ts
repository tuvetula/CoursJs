import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { ConditionsBouclesService } from 'src/app/shared/services/Javascript/conditions-boucles.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-conditions-et-boucles-container',
  templateUrl: './conditions-et-boucles-container.component.html',
  styleUrls: ['./conditions-et-boucles-container.component.css']
})
export class ConditionsEtBouclesContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private conditionsEtBouclesService: ConditionsBouclesService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.conditionsEtBouclesService.conditionsBouclesMenu);
    this.appliService.title.next('Conditions et Boucles');
  }
}
