import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { DomService } from 'src/app/shared/services/Menus/Javascript/dom.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-dom-container',
  templateUrl: './dom-container.component.html',
  styleUrls: ['./dom-container.component.css'],
  providers: [DomService]
})
export class DomContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private DomService: DomService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.DomService.domMenu);
    this.appliService.title.next('Dom');
  }

}
