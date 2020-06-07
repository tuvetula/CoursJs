import { Injectable } from "@angular/core";
import { MenuModel } from "../../../models/menu.model";

@Injectable()
export class MyAccountService {
  public myAccountMenu: MenuModel[];

  constructor() {
    this.myAccountMenu = [
      { name: "Mon profil", url: "/MonCompte/Profil" },
      { name: "Paramètres", url: "/MonCompte/Parametres"}
    ];
  }
}
