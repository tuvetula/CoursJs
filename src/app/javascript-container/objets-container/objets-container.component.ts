import { Component, OnInit } from '@angular/core';
import { ObjetsService } from 'src/app/shared/services/Menus/Javascript/objets.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-objets-container',
  templateUrl: './objets-container.component.html',
  styleUrls: ['./objets-container.component.css'],
  providers: [ObjetsService]
})
export class ObjetsContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private objetsService: ObjetsService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.objetsService.objetsMenu);
    this.appliService.title.next('Objets');
  }

}
