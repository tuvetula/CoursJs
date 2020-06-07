import { Injectable } from '@angular/core';

@Injectable()
export class CookiesService {
  public cookiesMenu: {name:string , url: string}[];

  constructor() {
    this.cookiesMenu = [
      {name:"Introduction aux web Api dédiées au stockage" , url: "/Javascript/Cookies/Introduction"},
      {name:"Utilisation des cookies" , url: "/Javascript/Cookies/Utilisation-cookies"},
      {name:"Propriétés des cookies" , url: "/Javascript/Cookies/Proprietes-cookies"},
      {name:"First-party, third-party et propriété samesite" , url: "/Javascript/Cookies/First-party"},
      {name:"LocalStorage et sessionStorage" , url: "/Javascript/Cookies/LocalStorage-sessionStorage"},
      {name:"Les évènements storage" , url: "/Javascript/Cookies/Evenements"},
    ];
   }
}