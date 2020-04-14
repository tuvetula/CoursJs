import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/shared/services/Angular/module.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AngularService } from 'src/app/shared/services/Angular/angular.service';

@Component({
  selector: 'app-modules-container',
  templateUrl: './modules-container.component.html',
  styleUrls: ['./modules-container.component.css']
})
export class ModulesContainerComponent implements OnInit {

  constructor(private modulesService: ModuleService,
    private listMenuLeftService: ListMenuLeftService,
    private angularService: AngularService) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.modulesService.modulesMenu);
    this.angularService.title.next("Modules");
  }

}
