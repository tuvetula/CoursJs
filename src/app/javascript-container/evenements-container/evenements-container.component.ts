import { Component, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/shared/services/Menus/Javascript/evenements.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-evenements-container',
  templateUrl: './evenements-container.component.html',
  styleUrls: ['./evenements-container.component.css'],
  providers: [EvenementsService]
})
export class EvenementsContainerComponent implements OnInit {

  constructor(
    private listLeftMenuService: ListMenuLeftService,
    private evenementsService: EvenementsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listLeftMenuService.listMenu.next(this.evenementsService.evenementsMenu);
    this.appliService.title.next('Evènements');
  }

}
