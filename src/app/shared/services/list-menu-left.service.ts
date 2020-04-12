import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListMenuLeftService {
  public listMenu: BehaviorSubject<{ name:string , url:string }[]> = new BehaviorSubject([]);

  constructor() { }
}
