import { Injectable } from "@angular/core";
import { MenuModel } from "../../models/menu.model";

@Injectable()
export class JavascriptService {
  public javascriptMenu: MenuModel[];

  constructor() {
    this.javascriptMenu = [
      { name: "Bases", url: "Javascript/Bases" },
      { name: "Conditions & Boucles", url: "Javascript/Conditions-Boucles" },
      { name: "Nombres", url: "Javascript/Nombres" },
      { name: "String", url: "Javascript/String" },
      { name: "Modules", url: "Javascript/ModulesJs" },
      { name: "Dom", url: "Javascript/Dom" },
      { name: "Evènements", url: "Javascript/Evenements" },
    ];
  }
}
