import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  public modulesMenu: LessonMenuModel[];

  constructor() {
    this.modulesMenu = [
      { name: "Root module", url: "/Angular/Modules/Root-module" , keywords:['root'] },
      { name: "Feature module", url: "/Angular/Modules/Feature-module" , keywords:['features'] },
      { name: "Module de routing", url: "/Angular/Modules/Module-routing" , keywords:['routing'] },
      { name: "Shared module", url: "/Angular/Modules/Shared-module" , keywords:['shared'] },
      { name: "Lazy loading", url: "/Angular/Modules/Lazy-loading" , keywords:['lazy','loading']},
      { name: "JIT & AOT", url: "/Angular/Modules/Jit-aot" , keywords:['jit','aot'] },
    ];
  }
}
