import { Injectable } from "@angular/core";

@Injectable()
export class DirectiveService {
  public directiveMenu: { name: string; url: string }[];

  constructor() {
    this.directiveMenu = [
      { name: "ngIf", url: "/Angular/Directives/ngIf" },
      { name: "ngFor", url: "/Angular/Directives/ngFor" },
      { name: "ngStyle", url: "/Angular/Directives/ngStyle" },
      { name: "ngClass", url: "/Angular/Directives/ngClass" },
      { name: "Directive d'attribut", url: "/Angular/Directives/Directive-attribut" },
      { name: "HostListener", url: "/Angular/Directives/HostListener" },
      { name: "HostBinding", url: "/Angular/Directives/HostBinding" },
      { name: "Liaison de propriétés et directive" , url: "/Angular/Directives/Liaison-proprietes-directive"},
      { name: "Directive structurelle" , url: "/Angular/Directives/Directive-Structurelle"}
    ];
  }
}
