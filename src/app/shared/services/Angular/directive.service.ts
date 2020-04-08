import { Injectable } from "@angular/core";

@Injectable()
export class DirectiveService {
  public directiveMenu: { name: string; url: string }[];

  constructor() {
    this.directiveMenu = [
      { name: "ngIf", url: "ngIf" },
      { name: "ngFor", url: "ngFor" },
      { name: "ngStyle", url: "ngStyle" },
      { name: "ngClass", url: "ngClass" },
      { name: "Directive d'attribut", url: "Directive-attribut" },
      { name: "HostListener", url: "HostListener" },
      { name: "HostBinding", url: "HostBinding" },
      { name: "Liaison de propriétés et directive" , url: "Liaison-proprietes-directive"},
      { name: "Directive structurelle" , url: "Directive-Structurelle"}
    ];
  }
}
