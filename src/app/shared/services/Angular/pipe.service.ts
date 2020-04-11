import { Injectable } from '@angular/core';

@Injectable()
export class PipeService {
  public pipeMenu: {name: string , url: string}[]

  constructor() { 
    this.pipeMenu = [
      {name: "Introduction" , url: "Pipes/Introduction"},
      {name: "Utilisation" , url: "Pipes/Utilisation"},
      {name: "Créer un pipe personnalisé" , url: "Pipes/Creer-pipe-personnalise"},
      {name: "Pipes purs et impurs" , url: "Pipes/Pipes-purs-impurs"},
      {name: "Le pipe asynchrone" , url: "Pipes/Pipe-asynchrone"},
      {name: "Exemple" , url: "Pipes/Exemple"}
    ]
  }
}
