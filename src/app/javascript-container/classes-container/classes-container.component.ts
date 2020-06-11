import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { ClassesService } from 'src/app/shared/services/Menus/Javascript/classes.service';

@Component({
  selector: 'app-classes-container',
  templateUrl: './classes-container.component.html',
  styleUrls: ['./classes-container.component.css'],
  providers: [ClassesService]
})
export class ClassesContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private classesService: ClassesService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.classesService.classesMenu);
    this.appliService.title.next('Classes');
  }

}
