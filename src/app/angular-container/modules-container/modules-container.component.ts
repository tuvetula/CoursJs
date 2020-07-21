import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModuleService } from 'src/app/shared/services/Menus/Angular/module.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-modules-container',
  template: '<router-outlet></router-outlet>',
})
export class ModulesContainerComponent implements OnInit, OnDestroy {

  constructor(private modulesService: ModuleService,
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.modulesService.modulesMenu);
    this.appliService.title.next("Modules");
  }
  ngOnDestroy(): void {
    this.lessonsMenuService.lessonMenu.next([]);    
  }

}
