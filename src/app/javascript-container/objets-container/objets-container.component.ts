import { Component, OnInit } from '@angular/core';
import { ObjetsService } from 'src/app/shared/services/Javascript/objets.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-objets-container',
  templateUrl: './objets-container.component.html',
  styleUrls: ['./objets-container.component.css'],
  providers: [ObjetsService]
})
export class ObjetsContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private objetsService: ObjetsService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.objetsService.objetsMenu);
    this.appliService.title.next('Objets');
  }

}
