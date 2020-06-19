import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class NpmService {
  public npmMenu: LessonMenuModel[];

  constructor() { 
    this.npmMenu = [
      {
        name: "Introduction",
        url: "/Node/Npm/Introduction",
        keywords: []
      },
      {
        name: "Utilisation",
        url: "/Node/Npm/Utilisation",
        keywords: []
      }
    ]
  }
}
