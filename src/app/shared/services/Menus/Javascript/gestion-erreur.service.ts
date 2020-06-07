import { Injectable } from '@angular/core';

@Injectable()
export class GestionErreurService {
  public gestionErreurMenu: {name:string , url: string}[];

  constructor() {
    this.gestionErreurMenu = [
      {name:"Introduction à la gestion d'erreur" , url: "/Javascript/GestionErreur/Introduction"},
      {name:"Etendre l'objet Error" , url: "/Javascript/GestionErreur/Etendre-objet-error"},
      {name:"Le debogguer de chrome DevTools" , url: "/Javascript/GestionErreur/Debogguer-chrome"},
      {name:"Le debogguer de Vs Code" , url: "/Javascript/GestionErreur/Debogguer-Vscode"},
    ];
   }
}