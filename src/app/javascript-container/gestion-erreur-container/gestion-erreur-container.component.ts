import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/Menus/list-menu-left.service';
import { GestionErreurService } from 'src/app/shared/services/Menus/Javascript/gestion-erreur.service';

@Component({
  selector: 'app-gestion-erreur-container',
  templateUrl: './gestion-erreur-container.component.html',
  styleUrls: ['./gestion-erreur-container.component.css'],
  providers: [GestionErreurService]
})
export class GestionErreurContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private gestionErreurService: GestionErreurService 
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.gestionErreurService.gestionErreurMenu);
    this.appliService.title.next("Gestion d'erreur");
  }

}
