import { Injectable } from '@angular/core';
import { MenuModel } from 'src/app/shared/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminMenu: MenuModel[];

  constructor() { 
    this.adminMenu = [
      {name: "Utilisateurs" , url: "Utilisateurs"}
    ]
  }
}
