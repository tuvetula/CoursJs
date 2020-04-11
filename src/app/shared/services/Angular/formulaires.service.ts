import { Injectable } from '@angular/core';

@Injectable()
export class FormulairesService {

  public formulairesMenu: {name: string, url:string}[];

  constructor() { 
    this.formulairesMenu = [
      {name: "Introduction aux ReactiveForm" , url: "Formulaires/Introduction-ReactiveForm"},
      {name: "Création d'un formulaire réactif" , url: "Formulaires/Creation-formulaire-reactif"},
      {name: "L'Api de FormControl et FormGroup" , url: "Formulaires/Api-formControl-formGroup"},
      {name: "Value et Reset" , url: "Formulaires/Value-Reset"},
      {name: "Les validateurs" , url: "Formulaires/Validateurs"},
      {name: "Les messages d'erreur" , url: "Formulaires/Messages-erreur"},
      {name: "Les classes et états des abstractControls" , url: "Formulaires/Classes-etats-abstractControls"},
      {name: "Les formGroups imbriqués" , url: "Formulaires/FormGroups-imbriques"},
      {name: "FormArray" , url: "Formulaires/FormArray"},
      {name: "FormBuilder" , url: "Formulaires/FormBuilder"},
      {name: "FormGroup et EventEmitter" , url: "Formulaires/FormGroup-eventEmitter"},
      {name: "Exemple" , url: "Formulaires/Exemple"}
    ]
  }
}
