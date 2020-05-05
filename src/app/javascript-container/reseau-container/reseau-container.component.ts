import { Component, OnInit } from '@angular/core';
import { ReseauService } from 'src/app/shared/services/Javascript/reseau.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-reseau-container',
  templateUrl: './reseau-container.component.html',
  styleUrls: ['./reseau-container.component.css'],
  providers: [ReseauService]
})
export class ReseauContainerComponent implements OnInit {

  constructor(
    private reseauService: ReseauService,
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.reseauService.reseauMenu);
    this.appliService.title.next('Réseau');
  }

}
