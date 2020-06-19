import { Component, OnInit } from '@angular/core';
import { AppliService } from 'src/app/shared/services/Menus/appli.service';
import { LessonsMenuService } from 'src/app/shared/services/Menus/lessons-menu.service';
import { ModuleExportRequireService } from 'src/app/shared/services/Menus/Node/module-export-require.service';

@Component({
  selector: 'app-module-export-require-container',
  templateUrl: './module-export-require-container.component.html',
  styleUrls: ['./module-export-require-container.component.css']
})
export class ModuleExportRequireContainerComponent implements OnInit {

  constructor(
    private appliService: AppliService,
    private lessonsMenuService: LessonsMenuService,
    private moduleExportRequireService: ModuleExportRequireService
  ) { }

  ngOnInit(): void {
    this.lessonsMenuService.lessonMenu.next(this.moduleExportRequireService.moduleExportRequireMenu);
    this.appliService.title.next('Module, export, require')
  }

}
