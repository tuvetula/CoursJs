import { Component, OnInit } from '@angular/core';
import { StringService } from 'src/app/shared/services/Menus/Javascript/string.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';

@Component({
  selector: 'app-string-container',
  templateUrl: './string-container.component.html',
  styleUrls: ['./string-container.component.css'],
  providers: [StringService]
})
export class StringContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private stringService: StringService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.stringService.stringMenu);
    this.appliService.title.next('String');
  }

}
