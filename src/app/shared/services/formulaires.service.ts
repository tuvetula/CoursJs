import { Injectable } from '@angular/core';

@Injectable()
export class FormulairesService {

  public formulairesMenu: {name: string, url:string}[];

  constructor() { 
    this.formulairesMenu = [
      {name: "Introduction aux ReactiveForm" , url: "Introduction-ReactiveForm"},
      {name: "Création d'un formulaire réactif" , url: "Creation-formulaire-reactif"},
      {name: "L'Api de FormControl et FormGroup" , url: "Api-formControl-formGroup"},
      {name: "Value et Reset" , url: "Value-Reset"},
      {name: "Les validateurs" , url: "Validateurs"},
      {name: "Les messages d'erreur" , url: "Messages-erreur"},
      {name: "Les classes et états des abstractControls" , url: "Classes-etats-abstractControls"},
      {name: "Les formGroups imbriqués" , url: "FormGroups-imbriques"},
      {name: "FormArray" , url: "FormArray"},
      {name: "FormBuilder" , url: "FormBuilder"},
      {name: "FormGroup et EventEmitter" , url: "FormGroup-eventEmitter"},
      {name: "Exemple" , url: "Exemple"}
    ]
  }
}
