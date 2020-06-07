import { Injectable } from "@angular/core";

@Injectable()
export class ServicesService {
  public serviceMenu: { name: string; url: string }[];

  constructor() {
    this.serviceMenu = [
      { name: "Definition service", url: "/Angular/Services/Definition-service" },
      {
        name: "Definition injection de dépendances",
        url: "/Angular/Services/Definition-injection-dependances",
      },
      { name: "Hiérarchie injection de dépendances", url: "/Angular/Services/Hierarchie" },
      { name: "Utilisation d'un service dans un autre service", url: "/Angular/Services/Utilisation" },
    ];
  }
}
