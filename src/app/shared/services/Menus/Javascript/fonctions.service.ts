import { Injectable } from '@angular/core';

@Injectable()
export class FonctionsService {
  public fonctionsMenu: {name:string , url: string}[];

  constructor() {
    this.fonctionsMenu = [
      {name:"Les expressions de fonction et leur déclaration" , url: "/Javascript/Fonctions/Expression-fonction-declaration"},
      {name:"Paramètres, arguments et paramètres par défaut" , url: "/Javascript/Fonctions/Parametres-arguments"},
      {name:"Objet arguments et utilisation de l'opérateur Rest" , url: "/Javascript/Fonctions/Objet-arguments-Rest"},
      {name:"Valeur de retour des fonctions" , url: "/Javascript/Fonctions/Valeur-retour"},
      {name:"Environnement lexical et contexte d'exécution" , url: "/Javascript/Fonctions/Environnement-lexical"},
      {name:"La chaine de portée" , url: "/Javascript/Fonctions/Chaine-de-portée"},
      {name:"Namespace et IIFE" , url: "/Javascript/Fonctions/Namespace"},
      {name:"Le mot-clé this " , url: "/Javascript/Fonctions/This"},
      {name:"Définir ou lier this" , url: "/Javascript/Fonctions/Definir-lier-this"},
      {name:"Les fonctions fléchées" , url: "/Javascript/Fonctions/Fonctions-flechees"},
      {name:"Les fonctions de rappel (callback)" , url: "/Javascript/Fonctions/Fonctions-de-rappel"},
      {name:"Les fermetures (closures)" , url: "/Javascript/Fonctions/Fermetures"}
    ];
   }
}