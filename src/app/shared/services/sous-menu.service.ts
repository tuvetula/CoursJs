import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SousMenuService {
  public menuClickPathname: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
