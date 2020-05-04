import { Injectable } from '@angular/core';

@Injectable()
export class AsynchroneService {
  public asynchroneMenu: {name:string , url: string}[];

  constructor() {
    this.asynchroneMenu = [
      {name:"Introduction à l'asynchrone et timers" , url: "Asynchrone/Introduction"},
      {name:"Les promesses" , url: "Asynchrone/Promesses"},
      {name:"Chainer les promesses" , url: "Asynchrone/Chainer-promesses"},
      {name:"Les méthodes des promesses" , url: "Asynchrone/Methodes-promesses"},
      {name:"Utilisation de polyfills avec Webpack" , url: "Asynchrone/Polyfills-webpack"},
      {name:"Les fonctions asynchrones avec async/await" , url: "Asynchrone/Async-await"},
      {name:"Event loop" , url: "Asynchrone/Event-loop"},
    ];
   }
}