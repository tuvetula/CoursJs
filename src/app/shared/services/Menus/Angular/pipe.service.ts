import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class PipeService {
  public pipeMenu: LessonMenuModel[]

  constructor() { 
    this.pipeMenu = [
      {name: "Introduction" , url: "/Angular/Pipes/Introduction"},
      {name: "Utilisation" , url: "/Angular/Pipes/Utilisation"},
      {name: "Créer un pipe personnalisé" , url: "/Angular/Pipes/Creer-pipe-personnalise"},
      {name: "Pipes purs et impurs" , url: "/Angular/Pipes/Pipes-purs-impurs", keywords:['purs','impurs']},
      {name: "Le pipe asynchrone" , url: "/Angular/Pipes/Pipe-asynchrone",keywords:['asynchrones']},
      {name: "Exemple" , url: "/Angular/Pipes/Exemple"}
    ]
  }
}
