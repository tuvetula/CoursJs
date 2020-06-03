import { Injectable } from '@angular/core';

@Injectable()
export class CookiesService {
  public cookiesMenu: {name:string , url: string}[];

  constructor() {
    this.cookiesMenu = [
      {name:"Introduction aux web Api dédiées au stockage" , url: "Cookies/Introduction"},
      {name:"Utilisation des cookies" , url: "Cookies/Utilisation-cookies"},
      {name:"Propriétés des cookies" , url: "Cookies/Proprietes-cookies"},
      {name:"First-party, third-party et propriété samesite" , url: "Cookies/First-party"},
      {name:"LocalStorage et sessionStorage" , url: "Cookies/LocalStorage-sessionStorage"},
      {name:"Les évènements storage" , url: "Cookies/Evenements"},
    ];
   }
}