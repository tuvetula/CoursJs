import { Injectable } from "@angular/core";
import { MenuModel } from "../../models/menu.model";

@Injectable()
export class JavascriptService {
  public javascriptMenu: MenuModel[];

  constructor() {
    this.javascriptMenu = [
      { name: "Le Dom", url: "Dom" },
      { name: "Les évènements", url: "Evenements" },
    ];
  }
}
