import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { AsynchroneService } from 'src/app/shared/services/Menus/Javascript/asynchrone.service';

@Component({
  selector: 'app-asynchrone-container',
  templateUrl: './asynchrone-container.component.html',
  styleUrls: ['./asynchrone-container.component.css'],
  providers: [AsynchroneService]
})
export class AsynchroneContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService,
    private asynchroneService: AsynchroneService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.asynchroneService.asynchroneMenu);
    this.appliService.title.next('Asynchrone');
  }

}
