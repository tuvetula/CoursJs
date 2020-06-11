import { Component, OnInit } from '@angular/core';
import { EvenementsService } from 'src/app/shared/services/Menus/Javascript/evenements.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-evenements-container',
  templateUrl: './evenements-container.component.html',
  styleUrls: ['./evenements-container.component.css'],
  providers: [EvenementsService]
})
export class EvenementsContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private evenementsService: EvenementsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.evenementsService.evenementsMenu);
    this.appliService.title.next('Evènements');
  }

}
