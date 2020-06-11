import { Component, OnInit } from '@angular/core';
import { ModulesJsService } from 'src/app/shared/services/Menus/Javascript/modules.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-modules-js-container',
  templateUrl: './modules-js-container.component.html',
  styleUrls: ['./modules-js-container.component.css'],
  providers: [ModulesJsService]
})
export class ModulesJsContainerComponent implements OnInit {

  constructor(
    private lessonsMenuService: LessonsMenuService,
    private modulesJsService: ModulesJsService,
    private appliService: AppliService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.modulesJsService.modulesJsMenu);
    this.appliService.title.next('Modules');
  }

}
