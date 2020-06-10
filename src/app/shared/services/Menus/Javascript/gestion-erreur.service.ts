import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class GestionErreurService {
  public gestionErreurMenu: LessonMenuModel[];

  constructor() {
    this.gestionErreurMenu = [
      {name:"Introduction à la gestion d'erreur" , url: "/Javascript/GestionErreur/Introduction"},
      {name:"Etendre l'objet Error" , url: "/Javascript/GestionErreur/Etendre-objet-error",keywords:['error','objet']},
      {name:"Le debogguer de chrome DevTools" , url: "/Javascript/GestionErreur/Debogguer-chrome",keywords:['debugger','debogguer','chrome']},
      {name:"Le debogguer de Vs Code" , url: "/Javascript/GestionErreur/Debogguer-Vscode",keywords:['vscode','debogguer','debugger']},
    ];
   }
}