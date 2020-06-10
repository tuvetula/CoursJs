import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class AsynchroneService {
  public asynchroneMenu: LessonMenuModel[];

  constructor() {
    this.asynchroneMenu = [
      {name:"Introduction à l'asynchrone et timers" , url: "/Javascript/Asynchrone/Introduction",keywords:['Asynchrones','Timers']},
      {name:"Les promesses" , url: "/Javascript/Asynchrone/Promesses",keywords:['Promesses']},
      {name:"Chainer les promesses" , url: "/Javascript/Asynchrone/Chainer-promesses",keywords:['Promesses','Chainer']},
      {name:"Les méthodes des promesses" , url: "/Javascript/Asynchrone/Methodes-promesses",keywords:['Promesses','Methodes']},
      {name:"Utilisation de polyfills avec Webpack" , url: "/Javascript/Asynchrone/Polyfills-webpack",keywords:['Polyfills','Webpack']},
      {name:"Les fonctions asynchrones avec async/await" , url: "/Javascript/Asynchrone/Async-await",keywords:['async','await']},
      {name:"Event loop" , url: "/Javascript/Asynchrone/Event-loop",keywords:['event-loop']},
    ];
   }
}