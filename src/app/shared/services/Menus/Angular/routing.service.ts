import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  public routingMenu: LessonMenuModel[];

  constructor() {
    this.routingMenu = [
      { name: "Introduction", url: "/Angular/Routing/Introduction" },
      { name: "La directive RouterLink", url: "/Angular/Routing/RouterLink",keywords:['routerlink'] },
      { name: "La directive RouterLinkActive", url: "/Angular/Routing/RouterLinkActive",keywords:['routerlinkactive'] },
      {
        name: "Les services ActivatedRoute et Router",
        url: "/Angular/Routing/ActivatedRoute-Router",keywords:['activatedroute']
      },
      { name: "Params", url: "/Angular/Routing/Params",keywords:['params']},
      { name: "QueryParams et Fragment", url: "/Angular/Routing/QueryParams-Fragment",keywords:['queryparams','fragment'] },
      { name: "Routes imbriquées", url: "/Angular/Routing/Routes-imbriquees",keywords:['imbriquees','routes']},
      { name: "Redirection et wildcard", url: "/Angular/Routing/Redirection-wildcard",keywords:['wildcard'] },
      {
        name: "Séparer les fichiers de routing",
        url: "/Angular/Routing/Separer-fichiers-routing",
      },
      { name: "Le garde canActivate", url: "/Angular/Routing/CanActivate",keywords:['canactivate'] },
      { name: "Le garde canDeactivate", url: "/Angular/Routing/CanDeactivate",keywords:['candeactivate'] },
      { name: "Le garde resolver", url: "/Angular/Routing/Resolver",keywords:['resolver'] },
    ];
  }
}
