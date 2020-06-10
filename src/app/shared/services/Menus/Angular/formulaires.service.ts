import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class FormulairesService {

  public formulairesMenu: LessonMenuModel[];

  constructor() { 
    this.formulairesMenu = [
      {name: "Introduction aux ReactiveForm" , url: "/Angular/Formulaires/Introduction-ReactiveForm"},
      {name: "Création d'un formulaire réactif" , url: "/Angular/Formulaires/Creation-formulaire-reactif" , keywords:['creation','formulaires','reactif']},
      {name: "L'Api de FormControl et FormGroup" , url: "/Angular/Formulaires/Api-formControl-formGroup" , keywords:['formControl','formGroup']},
      {name: "Value et Reset" , url: "/Angular/Formulaires/Value-Reset" , keywords:['value','reset']},
      {name: "Les validateurs" , url: "/Angular/Formulaires/Validateurs" , keywords:['validateurs','Validators']},
      {name: "Les messages d'erreur" , url: "/Angular/Formulaires/Messages-erreur" , keywords:['errors','messages']},
      {name: "Les classes et états des abstractControls" , url: "/Angular/Formulaires/Classes-etats-abstractControls" , keywords:['etats','abstractcontrols','classes']},
      {name: "Les formGroups imbriqués" , url: "/Angular/Formulaires/FormGroups-imbriques" , keywords:['formgroups','imbriquees']},
      {name: "FormArray" , url: "/Angular/Formulaires/FormArray" , keywords:['formarray']},
      {name: "FormBuilder" , url: "/Angular/Formulaires/FormBuilder" , keywords:['formbuilder']},
      {name: "FormGroup et EventEmitter" , url: "/Angular/Formulaires/FormGroup-eventEmitter" , keywords:['formgroup','eventemitter']},
      {name: "Exemple" , url: "/Angular/Formulaires/Exemple"}
    ]
  }
}
