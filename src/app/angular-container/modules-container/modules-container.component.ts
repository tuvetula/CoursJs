import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/shared/services/Menus/Angular/module.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';

@Component({
  selector: 'app-modules-container',
  templateUrl: './modules-container.component.html',
  styleUrls: ['./modules-container.component.css']
})
export class ModulesContainerComponent implements OnInit {

  constructor(private modulesService: ModuleService,
    private lessonsMenuService: LessonsMenuService,
    private appliService: AppliService) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.modulesService.modulesMenu);
    this.appliService.title.next("Modules");
  }

}
