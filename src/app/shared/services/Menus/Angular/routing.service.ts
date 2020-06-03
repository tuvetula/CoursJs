import { Injectable } from "@angular/core";

@Injectable()
export class RoutingService {
  public routingMenu: { name: string; url: string }[];

  constructor() {
    this.routingMenu = [
      { name: "Introduction", url: "Routing/Introduction" },
      { name: "La directive RouterLink", url: "Routing/RouterLink" },
      { name: "La directive RouterLinkActive", url: "Routing/RouterLinkActive" },
      {
        name: "Les services ActivatedRoute et Router",
        url: "Routing/ActivatedRoute-Router",
      },
      { name: "Params", url: "Routing/Params" },
      { name: "QueryParams et Fragment", url: "Routing/QueryParams-Fragment" },
      { name: "Routes imbriquées", url: "Routing/Routes-imbriquees" },
      { name: "Redirection et wildcard", url: "Routing/Redirection-wildcard" },
      {
        name: "Séparer les fichiers de routing",
        url: "Routing/Separer-fichiers-routing",
      },
      { name: "Le garde canActivate", url: "Routing/CanActivate" },
      { name: "Le garde canDeactivate", url: "Routing/CanDeactivate" },
      { name: "Le garde resolver", url: "Routing/Resolver" },
    ];
  }
}
