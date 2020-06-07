import { Injectable } from '@angular/core';

@Injectable()
export class AsynchroneService {
  public asynchroneMenu: {name:string , url: string}[];

  constructor() {
    this.asynchroneMenu = [
      {name:"Introduction à l'asynchrone et timers" , url: "/Javascript/Asynchrone/Introduction"},
      {name:"Les promesses" , url: "/Javascript/Asynchrone/Promesses"},
      {name:"Chainer les promesses" , url: "/Javascript/Asynchrone/Chainer-promesses"},
      {name:"Les méthodes des promesses" , url: "/Javascript/Asynchrone/Methodes-promesses"},
      {name:"Utilisation de polyfills avec Webpack" , url: "/Javascript/Asynchrone/Polyfills-webpack"},
      {name:"Les fonctions asynchrones avec async/await" , url: "/Javascript/Asynchrone/Async-await"},
      {name:"Event loop" , url: "/Javascript/Asynchrone/Event-loop"},
    ];
   }
}