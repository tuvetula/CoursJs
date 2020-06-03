import { Component, OnInit } from '@angular/core';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { NombresService } from 'src/app/shared/services/Menus/Javascript/nombres.service'

@Component({
  selector: 'app-nombres-container',
  templateUrl: './nombres-container.component.html',
  styleUrls: ['./nombres-container.component.css'],
  providers: [NombresService]
})
export class NombresContainerComponent implements OnInit {

  constructor(
    private listMenuLeftService: ListMenuLeftService,
    private nombresService: NombresService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.nombresService.nombresMenu);
    this.appliService.title.next('Nombres');
  }

}
