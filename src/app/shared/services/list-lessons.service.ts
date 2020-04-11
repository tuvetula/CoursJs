import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListLessonsService {
  public listMenu: BehaviorSubject<{ name:string , url:string }[]> = new BehaviorSubject([]);

  constructor() { }
}
