import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleExportRequireService {
  public moduleExportRequireMenu: LessonMenuModel[];

  constructor() { 
    this.moduleExportRequireMenu = [
      {
        name: "Utiliser l'interpréteur Node",
        url: "/Node/Module-export-require/Interpreteur-node",
        keywords: ['interpreteur']
      },
      {
        name: "Module, export et require",
        url: "/Node/Module-export-require/Module-export-require",
        keywords: ['module','export','require']
      },
      {
        name: "Le wrapper module",
        url: "/Node/Module-export-require/Wrapper-module",
        keywords: ['wrapper']
      },
      {
        name: "require avancé",
        url: "/Node/Module-export-require/Require-avance",
        keywords: ['require']
      },
      {
        name: "Importer des modules natifs",
        url: "/Node/Module-export-require/Importer-modules-natifs",
        keywords: ['modules','natifs']
      },
    ]
  }
}
