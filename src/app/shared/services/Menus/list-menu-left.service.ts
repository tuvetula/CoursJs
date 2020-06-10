import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LessonMenuModel } from '../../models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class ListMenuLeftService {
  public listMenu: BehaviorSubject<LessonMenuModel[]> = new BehaviorSubject([]);

  constructor() { }
}
