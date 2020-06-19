import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { NodeIntroductionService } from 'src/app/shared/services/Menus/Node/node-introduction.service';

@Component({
  selector: 'app-node-introduction-container',
  templateUrl: './node-introduction-container.component.html',
  styleUrls: ['./node-introduction-container.component.css'],
})
export class NodeIntroductionContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private introductionService: NodeIntroductionService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.introductionService.introductionMenu);
    this.appliService.title.next('Introduction');
  }
}
