import { Component, OnInit } from '@angular/core';
import { TableauxService } from 'src/app/shared/services/Menus/Javascript/tableaux.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';

@Component({
  selector: 'app-tableaux-container',
  templateUrl: './tableaux-container.component.html',
  styleUrls: ['./tableaux-container.component.css'],
  providers: [TableauxService]
})
export class TableauxContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private tableauxService: TableauxService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.tableauxService.tableauxMenu);
    this.appliService.title.next('Tableaux');
  }

}
