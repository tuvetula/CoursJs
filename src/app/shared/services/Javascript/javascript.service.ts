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
      { name: "Objets" , url:"Javascript/Objets"},
      { name: "Fonctions" , url: "Javascript/Fonctions"},
      { name: "Modules", url: "Javascript/ModulesJs" },
      { name: "Dom", url: "Javascript/Dom" },
      { name: "Evènements", url: "Javascript/Evenements" },
      { name: "Asynchrone" , url: "Javascript/Asynchrone"},
      { name: "Réseau" , url: "Javascript/Reseau"},
      { name: "Date" , url: "Javascript/Date"},
      { name: "Location&History" , url: "Javascript/LocationAndHistory"}
    ];
  }
}
