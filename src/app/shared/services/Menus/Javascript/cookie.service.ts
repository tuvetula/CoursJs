import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  public cookiesMenu: LessonMenuModel[];

  constructor() {
    this.cookiesMenu = [
      {name:"Introduction aux web Api dédiées au stockage" , url: "/Javascript/Cookies/Introduction"},
      {name:"Utilisation des cookies" , url: "/Javascript/Cookies/Utilisation-cookies"},
      {name:"Propriétés des cookies" , url: "/Javascript/Cookies/Proprietes-cookies",keywords:['proprietes']},
      {name:"First-party, third-party et propriété samesite" , url: "/Javascript/Cookies/First-party",keywords:['first-party','samesite']},
      {name:"LocalStorage et sessionStorage" , url: "/Javascript/Cookies/LocalStorage-sessionStorage",keywords:['localstorage','sessionstorage']},
      {name:"Les évènements storage" , url: "/Javascript/Cookies/Evenements",keywords:['evenements']},
    ];
   }
}