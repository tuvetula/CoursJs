import { Injectable } from '@angular/core';

@Injectable()
export class PipeService {
  public pipeMenu: {name: string , url: string}[]

  constructor() { 
    this.pipeMenu = [
      {name: "Introduction" , url: "Introduction"},
      {name: "Utilisation" , url: "Utilisation"},
      {name: "Créer un pipe personnalisé" , url: "Creer-pipe-personnalise"},
      {name: "Pipes purs et impurs" , url: "Pipes-purs-impurs"},
      {name: "Le pipe asynchrone" , url: "Pipe-asynchrone"},
      {name: "Exemple" , url: "Exemple"}
    ]
  }
}
