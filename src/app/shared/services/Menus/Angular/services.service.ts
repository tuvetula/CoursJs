import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public serviceMenu: LessonMenuModel[];

  constructor() {
    this.serviceMenu = [
      { name: "Definition service", url: "/Angular/Services/Definition-service" },
      {
        name: "Definition injection de dépendances",
        url: "/Angular/Services/Definition-injection-dependances",keywords:['injection','dependances']
      },
      { name: "Hiérarchie injection de dépendances", url: "/Angular/Services/Hierarchie",keywords:['hierarchie','hiérarchie'] },
      { name: "Utilisation d'un service dans un autre service", url: "/Angular/Services/Utilisation" },
    ];
  }
}
