import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class DirectiveService {
  public directiveMenu: LessonMenuModel[];

  constructor() {
    this.directiveMenu = [
      { name: "ngIf", url: "/Angular/Directives/ngIf" , keywords:['ngif'] },
      { name: "ngFor", url: "/Angular/Directives/ngFor" , keywords:['ngfor'] },
      { name: "ngStyle", url: "/Angular/Directives/ngStyle" , keywords:['ngstyle'] },
      { name: "ngClass", url: "/Angular/Directives/ngClass" , keywords:['ngclass'] },
      { name: "Directive d'attribut", url: "/Angular/Directives/Directive-attribut" , keywords:['directive','attribut'] },
      { name: "HostListener", url: "/Angular/Directives/HostListener" , keywords:['hostlistener'] },
      { name: "HostBinding", url: "/Angular/Directives/HostBinding" , keywords:['hostbinding'] },
      { name: "Liaison de propriétés et directive" , url: "/Angular/Directives/Liaison-proprietes-directive" , keywords:['liaisons','proprietes','directives']},
      { name: "Directive structurelle" , url: "/Angular/Directives/Directive-Structurelle" , keywords:['directives','structurelles']}
    ];
  }
}
