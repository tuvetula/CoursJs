import { Component, OnInit } from '@angular/core';
import { FonctionsService } from 'src/app/shared/services/Menus/Javascript/fonctions.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-fonctions-container',
  templateUrl: './fonctions-container.component.html',
  styleUrls: ['./fonctions-container.component.css'],
  providers: [FonctionsService]
})
export class FonctionsContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private fonctionsService: FonctionsService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.fonctionsService.fonctionsMenu);
    this.appliService.title.next('Fonctions');
  }
}
