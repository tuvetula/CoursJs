import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: "root"
})
export class NodeIntroductionService {
  public introductionMenu: LessonMenuModel[];
  constructor() {
    this.introductionMenu = [
      {
        name: "Javascript serveur et client",
        url: "/Node/Introduction/JavascriptServeurClient",
        keywords: ['Définition','Histoire','fonctionnement']
      },
      {
        name: "V8",
        url: "/Node/Introduction/V8",
        keywords: ['V8','moteur']
      },
      {
        name: "Synchrone, asynchrone, bloquant et non bloquant",
        url: "/Node/Introduction/Synchrone-asynchrone",
        keywords: ['synchrone','asynchrone','bloquant','libuv']
      },
      {
        name: "Spécification d'un serveur web",
        url: "/Node/Introduction/Serveur-web",
        keywords: ['serveur','web','besoins']
      }
    ]
   }
}
