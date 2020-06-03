import { Injectable } from '@angular/core';

@Injectable()
export class AnimationsService {
  public animationsMenu: {name:string , url: string}[];

  constructor() {
    this.animationsMenu = [
      {name:"Introduction" , url: "Animations/Introduction"},
      {name:"Les fonctions trigger, state et style" , url: "Animations/Fonctions-trigger-state-style"},
      {name:"Les fonctions transition et animate" , url: "Animations/Fonctions-transition-animate"},
      {name:"Les keyframes et les groups" , url: "Animations/Keyframes-groups"},
      {name:"Les callbacks (start et done)" , url: "Animations/Callbacks-start-done"},
      {name:"Exemple" , url: "Animations/Exemple"},

    ];
   }
}
