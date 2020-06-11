import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { DateService } from 'src/app/shared/services/Menus/Javascript/date.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-date-container',
  templateUrl: './date-container.component.html',
  styleUrls: ['./date-container.component.css'],
  providers: [DateService]
})
export class DateContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.dateService.dateMenu);
    this.appliService.title.next('Date');
  }

}
