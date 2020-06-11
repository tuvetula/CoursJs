import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { DomService } from 'src/app/shared/services/Menus/Javascript/dom.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-dom-container',
  templateUrl: './dom-container.component.html',
  styleUrls: ['./dom-container.component.css'],
  providers: [DomService]
})
export class DomContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private DomService: DomService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.DomService.domMenu);
    this.appliService.title.next('Dom');
  }

}
