import { Component, OnInit } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { FlexLayoutService } from 'src/app/shared/services/Menus/Angular/flex-layout.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-flex-layout-container',
  templateUrl: './flex-layout-container.component.html',
  styleUrls: ['./flex-layout-container.component.css']
})
export class FlexLayoutContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private flexLayoutService: FlexLayoutService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.flexLayoutService.flexLayoutMenu);
    this.appliService.title.next('Flex-layout');
  }

}
