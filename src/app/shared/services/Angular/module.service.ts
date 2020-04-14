import { Injectable } from "@angular/core";

@Injectable()
export class ModuleService {
  public modulesMenu: { name: string; url: string }[];

  constructor() {
    this.modulesMenu = [
      { name: "Root module", url: "Modules/Root-module" },
      { name: "Feature module", url: "Modules/Feature-module" },
      { name: "Module de routing", url: "Modules/Module-routing" },
      { name: "Shared module", url: "Modules/Shared-module" },
      { name: "Lazy loading", url: "Modules/Lazy-loading" },
      { name: "JIT & AOT", url: "Modules/Jit-aot" },
    ];
  }
}
