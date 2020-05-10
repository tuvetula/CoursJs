import { Component, OnInit } from '@angular/core';
import { FonctionsService } from 'src/app/shared/services/Javascript/fonctions.service';
import { AppliService } from 'src/app/shared/services/appli.service';
import { ListMenuLeftService } from 'src/app/shared/services/list-menu-left.service';

@Component({
  selector: 'app-fonctions-container',
  templateUrl: './fonctions-container.component.html',
  styleUrls: ['./fonctions-container.component.css'],
  providers: [FonctionsService]
})
export class FonctionsContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private listMenuLeftService: ListMenuLeftService,
    private fonctionsService: FonctionsService
  ) { }

  ngOnInit(): void {
    this.listMenuLeftService.listMenu.next(this.fonctionsService.fonctionsMenu);
    this.appliService.title.next('Fonctions');
  }
}
