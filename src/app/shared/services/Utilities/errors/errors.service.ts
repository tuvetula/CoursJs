import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: () => `Ce champ est requis.`,
  email: () => `Veuillez entrer une adresse mail valide`,
  minlength: ({ requiredLength, actualLength }) => `Ce champ doit comporter au moins ${requiredLength} caractères.`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});