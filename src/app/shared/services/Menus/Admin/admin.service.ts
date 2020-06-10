import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminMenu: LessonMenuModel[];

  constructor() { 
    this.adminMenu = [
      {name: "Utilisateurs" , url: "Utilisateurs"}
    ]
  }
}
