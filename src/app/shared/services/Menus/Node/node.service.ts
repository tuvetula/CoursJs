import { Injectable } from '@angular/core';
import { ChapterMenuModel } from 'src/app/shared/models/Menus/menus.model';
import { NodeIntroductionService } from './node-introduction.service';
import { ModuleExportRequireService } from './module-export-require.service';
import { NpmService } from './npm.service';
import { NodeEvenementsService } from './node-evenements.service';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  public nodeMenu: ChapterMenuModel[];
  constructor(
    private nodeIntroductionService: NodeIntroductionService,
    private moduleExportRequireService: ModuleExportRequireService,
    private npmService: NpmService,
    private NodeEvenementsService: NodeEvenementsService
  ) {
    this.nodeMenu = [
      {
        name: "Introduction",
        url: "/Node/Introduction",
        lessonsMenu: this.nodeIntroductionService.introductionMenu,
        keywords:["Introduction"]
      },
      {
        name: "Module Export Require",
        url: "/Node/Module-export-require",
        lessonsMenu: this.moduleExportRequireService.moduleExportRequireMenu,
        keywords: ["Module","Export","Require"]
      },
      {
        name: "Npm",
        url: "/Node/Npm",
        lessonsMenu: this.npmService.npmMenu,
        keywords: ["Npm"]
      },
      {
        name: "Evenements",
        url: "/Node/Evenements",
        lessonsMenu: this.NodeEvenementsService.NodeEvenementsMenu,
        keywords:["Evenements"]
      }
    ];
  }
}
