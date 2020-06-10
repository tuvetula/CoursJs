import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {
  public animationsMenu: LessonMenuModel[];

  constructor() {
    this.animationsMenu = [
      {name:"Introduction" , url: "/Angular/Animations/Introduction"},
      {name:"Les fonctions trigger, state et style" , url: "/Angular/Animations/Fonctions-trigger-state-style" , keywords:['trigger','state' , 'style']},
      {name:"Les fonctions transition et animate" , url: "/Angular/Animations/Fonctions-transition-animate" , keywords:['transition','animate']},
      {name:"Les keyframes et les groups" , url: "/Angular/Animations/Keyframes-groups" , keywords:['keyframes','groups']},
      {name:"Les callbacks (start et done)" , url: "/Angular/Animations/Callbacks-start-done" , keywords:['start','done','callbacks']},
      {name:"Exemple" , url: "/Angular/Animations/Exemple"},

    ];
   }
}
