import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { MeanService } from 'src/app/shared/services/Menus/Angular/mean.service';

@Component({
  selector: 'app-mean-container',
  templateUrl: './mean-container.component.html',
  styleUrls: ['./mean-container.component.css'],
  providers: [MeanService]
})
export class MeanContainerComponent implements OnInit {

  constructor(
    private aplliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private meanService: MeanService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.meanService.meanMenu);
    this.aplliService.title.next('Mean');
  }

}
