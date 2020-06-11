import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
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
    private lessonsMenuService: LessonsMenuService,
    private nombresService: NombresService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.nombresService.nombresMenu);
    this.appliService.title.next('Nombres');
  }

}
