import { Injectable } from "@angular/core";

@Injectable()
export class ModuleService {
  public modulesMenu: { name: string; url: string }[];

  constructor() {
    this.modulesMenu = [
      { name: "Root module", url: "/Angular/Modules/Root-module" },
      { name: "Feature module", url: "/Angular/Modules/Feature-module" },
      { name: "Module de routing", url: "/Angular/Modules/Module-routing" },
      { name: "Shared module", url: "/Angular/Modules/Shared-module" },
      { name: "Lazy loading", url: "/Angular/Modules/Lazy-loading" },
      { name: "JIT & AOT", url: "/Angular/Modules/Jit-aot" },
    ];
  }
}
