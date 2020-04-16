import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppliService {
  public appliMenu: { name: string; url: string }[];
  public title: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {
    this.appliMenu = [
      { name: "Accueil", url: "/" },
      { name: "Angular", url: "Angular" },
      { name: "Javascript", url: "Javascript" },
    ];
  }
}
