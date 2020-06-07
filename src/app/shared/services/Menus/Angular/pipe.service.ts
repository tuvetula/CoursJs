import { Injectable } from '@angular/core';

@Injectable()
export class PipeService {
  public pipeMenu: {name: string , url: string}[]

  constructor() { 
    this.pipeMenu = [
      {name: "Introduction" , url: "/Angular/Pipes/Introduction"},
      {name: "Utilisation" , url: "/Angular/Pipes/Utilisation"},
      {name: "Créer un pipe personnalisé" , url: "/Angular/Pipes/Creer-pipe-personnalise"},
      {name: "Pipes purs et impurs" , url: "/Angular/Pipes/Pipes-purs-impurs"},
      {name: "Le pipe asynchrone" , url: "/Angular/Pipes/Pipe-asynchrone"},
      {name: "Exemple" , url: "/Angular/Pipes/Exemple"}
    ]
  }
}
