import { Injectable } from "@angular/core";

@Injectable()
export class DirectiveService {
  public directiveMenu: { name: string; url: string }[];

  constructor() {
    this.directiveMenu = [
      { name: "ngIf", url: "Directives/ngIf" },
      { name: "ngFor", url: "Directives/ngFor" },
      { name: "ngStyle", url: "Directives/ngStyle" },
      { name: "ngClass", url: "Directives/ngClass" },
      { name: "Directive d'attribut", url: "Directives/Directive-attribut" },
      { name: "HostListener", url: "Directives/HostListener" },
      { name: "HostBinding", url: "Directives/HostBinding" },
      { name: "Liaison de propriétés et directive" , url: "Directives/Liaison-proprietes-directive"},
      { name: "Directive structurelle" , url: "Directives/Directive-Structurelle"}
    ];
  }
}
