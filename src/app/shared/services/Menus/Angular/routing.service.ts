import { Injectable } from "@angular/core";

@Injectable()
export class RoutingService {
  public routingMenu: { name: string; url: string }[];

  constructor() {
    this.routingMenu = [
      { name: "Introduction", url: "/Angular/Routing/Introduction" },
      { name: "La directive RouterLink", url: "/Angular/Routing/RouterLink" },
      { name: "La directive RouterLinkActive", url: "/Angular/Routing/RouterLinkActive" },
      {
        name: "Les services ActivatedRoute et Router",
        url: "/Angular/Routing/ActivatedRoute-Router",
      },
      { name: "Params", url: "/Angular/Routing/Params" },
      { name: "QueryParams et Fragment", url: "/Angular/Routing/QueryParams-Fragment" },
      { name: "Routes imbriquées", url: "/Angular/Routing/Routes-imbriquees" },
      { name: "Redirection et wildcard", url: "/Angular/Routing/Redirection-wildcard" },
      {
        name: "Séparer les fichiers de routing",
        url: "/Angular/Routing/Separer-fichiers-routing",
      },
      { name: "Le garde canActivate", url: "/Angular/Routing/CanActivate" },
      { name: "Le garde canDeactivate", url: "/Angular/Routing/CanDeactivate" },
      { name: "Le garde resolver", url: "/Angular/Routing/Resolver" },
    ];
  }
}
