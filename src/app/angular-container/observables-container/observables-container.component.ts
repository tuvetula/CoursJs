import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../shared/services/Angular/observable.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AngularService } from 'src/app/shared/services/Angular/angular.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-observables-container',
  templateUrl: './observables-container.component.html',
  styleUrls: ['./observables-container.component.css']
})
export class ObservablesContainerComponent implements OnInit {

  constructor(private listMenuLeftService: ListMenuLeftService,
    private observableServive: ObservableService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.observableServive.observableMenu);
    this.appliService.title.next('Observables');
  }

}
