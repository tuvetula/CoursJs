import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
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
    private lessonsMenuService: LessonsMenuService,
    private gestionErreurService: GestionErreurService 
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.gestionErreurService.gestionErreurMenu);
    this.appliService.title.next("Gestion d'erreur");
  }

}
