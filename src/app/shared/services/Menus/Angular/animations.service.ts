import { Injectable } from '@angular/core';

@Injectable()
export class AnimationsService {
  public animationsMenu: {name:string , url: string}[];

  constructor() {
    this.animationsMenu = [
      {name:"Introduction" , url: "/Angular/Animations/Introduction"},
      {name:"Les fonctions trigger, state et style" , url: "/Angular/Animations/Fonctions-trigger-state-style"},
      {name:"Les fonctions transition et animate" , url: "/Angular/Animations/Fonctions-transition-animate"},
      {name:"Les keyframes et les groups" , url: "/Angular/Animations/Keyframes-groups"},
      {name:"Les callbacks (start et done)" , url: "/Angular/Animations/Callbacks-start-done"},
      {name:"Exemple" , url: "/Angular/Animations/Exemple"},

    ];
   }
}
