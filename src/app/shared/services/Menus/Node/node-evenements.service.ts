import { Injectable } from "@angular/core";
import { LessonMenuModel } from "src/app/shared/models/Menus/menus.model";

@Injectable({
  providedIn: "root",
})
export class NodeEvenementsService {
  public NodeEvenementsMenu: LessonMenuModel[];

  constructor() {
    this.NodeEvenementsMenu = [
      {
        name: "Les évènements Node.js",
        url: "/Node/Evenements/Evenements-node",
        keywords: ['core','libuv'],
      },
      {
        name: "Les évènements systèmes avec LIBUV",
        url: "/Node/Evenements/Evenements-systemes",
        keywords: ["libuv"],
      },
      {
        name: "Les évènements personnalisés",
        url: "/Node/Evenements/Evenements-personnalises",
        keywords: [],
      },
      {
        name: "Le module events.js",
        url: "/Node/Evenements/Module-events",
        keywords: ["events.js"],
      },
    ];
  }
}
