import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ErrorsService {
  public defaultErrors = {
    required: () => `Ce champ est requis.`,
    email: () => `Veuillez entrer une adresse mail valide`,
    minlength: ({ requiredLength }) =>
      `Ce champ doit comporter au moins ${requiredLength} caractères.`,
    maxlength: ({ requiredLength }) =>
      `Ce champ doit comporter maximum ${requiredLength} caractères.`,
  };

  constructor() {}
}
