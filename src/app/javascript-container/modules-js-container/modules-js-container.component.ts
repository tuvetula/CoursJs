import { Component, OnInit } from '@angular/core';
import { ModulesJsService } from 'src/app/shared/services/Javascript/modules.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/appli.service';

@Component({
  selector: 'app-modules-js-container',
  templateUrl: './modules-js-container.component.html',
  styleUrls: ['./modules-js-container.component.css'],
  providers: [ModulesJsService]
})
export class ModulesJsContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private modulesJsService: ModulesJsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.modulesJsService.modulesJsMenu);
    this.appliService.title.next('Modules');
  }

}
