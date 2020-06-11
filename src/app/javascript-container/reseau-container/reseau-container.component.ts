import { Component, OnInit } from '@angular/core';
import { ReseauService } from 'src/app/shared/services/Menus/Javascript/reseau.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

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
    private lessonsMenuService: LessonsMenuService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.reseauService.reseauMenu);
    this.appliService.title.next('Réseau');
  }

}
