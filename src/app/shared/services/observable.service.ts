import { Injectable } from '@angular/core';

@Injectable()
export class ObservableService {
  public observableMenu: {name:string,url:string}[];

  constructor() { 
    this.observableMenu = [
      {name:"Introduction",url:"Introduction"},
      {name:"Création d'un observable",url:"Creation-observable"},
      {name:"Introduction aux subjects",url:"Introduction-subjects"},
      {name:"Utilisation des subjects",url:"Utilisation-subjects"},
      {name:"Les opérateurs et les pipes RxJs",url:"Operateurs-pipes"},
    ]
  }
}
