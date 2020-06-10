import { Injectable } from "@angular/core";
import { LessonMenuModel, ChapterMenuModel } from "../../../models/Menus/menus.model";

@Injectable()
export class MyAccountService {
  public myAccountChaptersMenu: ChapterMenuModel[];
  public myAccountMenu: LessonMenuModel[];

  constructor() {
    this.myAccountChaptersMenu = [
      {
        name: null,
        url: null,
        lessonsMenu:  [
          { name: "Mon profil", url: "/MonCompte/Profil" },
          { name: "Paramètres", url: "/MonCompte/Parametres"}
      ]
    }];
    
    this.myAccountMenu = [
      { name: "Mon profil", url: "/MonCompte/Profil" },
      { name: "Paramètres", url: "/MonCompte/Parametres"}
    ];
  }
}
