import { Injectable } from '@angular/core';

@Injectable()
export class AppliService {
  public appliMenu: {name: string , url: string}[];

  constructor() { 
    this.appliMenu = [
      {name: "Angular" , url: "Angular"},
      {name: "Javascript" , url: "Javascript"}
    ]
  }
}
