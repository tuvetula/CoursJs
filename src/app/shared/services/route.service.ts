import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteService {
  public currentRoute: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }
}
