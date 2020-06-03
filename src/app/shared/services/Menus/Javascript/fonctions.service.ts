import { Injectable } from '@angular/core';

@Injectable()
export class FonctionsService {
  public fonctionsMenu: {name:string , url: string}[];

  constructor() {
    this.fonctionsMenu = [
      {name:"Les expressions de fonction et leur déclaration" , url: "Fonctions/Expression-fonction-declaration"},
      {name:"Paramètres, arguments et paramètres par défaut" , url: "Fonctions/Parametres-arguments"},
      {name:"Objet arguments et utilisation de l'opérateur Rest" , url: "Fonctions/Objet-arguments-Rest"},
      {name:"Valeur de retour des fonctions" , url: "Fonctions/Valeur-retour"},
      {name:"Environnement lexical et contexte d'exécution" , url: "Fonctions/Environnement-lexical"},
      {name:"La chaine de portée" , url: "Fonctions/Chaine-de-portée"},
      {name:"Namespace et IIFE" , url: "Fonctions/Namespace"},
      {name:"Le mot-clé this " , url: "Fonctions/This"},
      {name:"Définir ou lier this" , url: "Fonctions/Definir-lier-this"},
      {name:"Les fonctions fléchées" , url: "Fonctions/Fonctions-flechees"},
      {name:"Les fonctions de rappel (callback)" , url: "Fonctions/Fonctions-de-rappel"},
      {name:"Les fermetures (closures)" , url: "Fonctions/Fermetures"}
    ];
   }
}