import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  public materialMenu: LessonMenuModel[];

  constructor() { 
    this.materialMenu = [
      {name: "Préparation et installation de Material" , url: "/Angular/Material/Installation" , keywords:['Installation']},
      {name: "Input, Checkbox, Radio et Slide toggle" , url: "/Angular/Material/Input-checkbox-slide-toggle" , keywords:['input','checkbox','slide-toggle']},
      {name: "FormsField" , url: "/Angular/Material/FormsField" , keywords:['Formsfield']},
      {name: "Select, Slider et DatePicker" , url: "/Angular/Material/Select-slider-datepicker" , keywords:['select','slider','datepicker']},
      {name: "Autocomplete" , url: "/Angular/Material/Autocomplete" , keywords:['autocomplete']},
      {name: "Bouton, Menu et sidenav" , url: "/Angular/Material/Bouton-menu-sidenav" , keywords:['bouton','menu','sidenav']},
      {name: "Toolbar, list et grid" , url: "/Angular/Material/Toolbar-list-grid" , keywords:['Toolbar','list','grid']},
      {name: "Card, stepper, tabs" , url: "/Angular/Material/Card-stepper-tabs" , keywords:['card','stepper','tabs']},
      {name: "Expension panel, bouton toggle et chips" , url: "/Angular/Material/ExpensionPanel-boutonToggle-chips" , keywords:['expension panel', 'bouton toggle','chips']},
      {name: "Icon, progressSpinner et Bar" , url: "/Angular/Material/Icon-progressSpinner-bar" , keywords:['icon','progressSpinner','bar']},
      {name: "Dialog, tooltip et snackbar" , url: "/Angular/Material/Dialog-tooltip-snackbar" , keywords:['Dialog','tooltip','snackbar']},
      {name: "Les tableaux" , url: "/Angular/Material/Tableaux" , keywords:['Tableaux']},
      {name: "La pagination" , url: "/Angular/Material/Pagination" , keywords:['Pagination']},
      {name: "Trier et filtrer un tableau" , url: "/Angular/Material/Trier-filtrer-tableau" , keywords:['trier','filtrer','tableau']},
    ]
  }
}
