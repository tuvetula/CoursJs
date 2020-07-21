import { Component, OnInit, OnDestroy } from '@angular/core';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { FlexLayoutService } from 'src/app/shared/services/Menus/Angular/flex-layout.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-flex-layout-container',
  template: '<router-outlet></router-outlet>',
})
export class FlexLayoutContainerComponent implements OnInit,OnDestroy {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private flexLayoutService: FlexLayoutService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.flexLayoutService.flexLayoutMenu);
    this.appliService.title.next('Flex-layout');
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }

}
