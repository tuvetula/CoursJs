import { Injectable } from '@angular/core';

@Injectable()
export class FormulairesService {

  public formulairesMenu: {name: string, url:string}[];

  constructor() { 
    this.formulairesMenu = [
      {name: "Introduction aux ReactiveForm" , url: "/Angular/Formulaires/Introduction-ReactiveForm"},
      {name: "Création d'un formulaire réactif" , url: "/Angular/Formulaires/Creation-formulaire-reactif"},
      {name: "L'Api de FormControl et FormGroup" , url: "/Angular/Formulaires/Api-formControl-formGroup"},
      {name: "Value et Reset" , url: "/Angular/Formulaires/Value-Reset"},
      {name: "Les validateurs" , url: "/Angular/Formulaires/Validateurs"},
      {name: "Les messages d'erreur" , url: "/Angular/Formulaires/Messages-erreur"},
      {name: "Les classes et états des abstractControls" , url: "/Angular/Formulaires/Classes-etats-abstractControls"},
      {name: "Les formGroups imbriqués" , url: "/Angular/Formulaires/FormGroups-imbriques"},
      {name: "FormArray" , url: "/Angular/Formulaires/FormArray"},
      {name: "FormBuilder" , url: "/Angular/Formulaires/FormBuilder"},
      {name: "FormGroup et EventEmitter" , url: "/Angular/Formulaires/FormGroup-eventEmitter"},
      {name: "Exemple" , url: "/Angular/Formulaires/Exemple"}
    ]
  }
}
