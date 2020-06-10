import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class FonctionsService {
  public fonctionsMenu: LessonMenuModel[];

  constructor() {
    this.fonctionsMenu = [
      {name:"Les expressions de fonction et leur déclaration" , url: "/Javascript/Fonctions/Expression-fonction-declaration",keywords:['expression','declaration']},
      {name:"Paramètres, arguments et paramètres par défaut" , url: "/Javascript/Fonctions/Parametres-arguments",keywords:['arguments','parametres']},
      {name:"Objet arguments et utilisation de l'opérateur Rest" , url: "/Javascript/Fonctions/Objet-arguments-Rest",keywords:['rest']},
      {name:"Valeur de retour des fonctions" , url: "/Javascript/Fonctions/Valeur-retour",keywords:['valeur','retour']},
      {name:"Environnement lexical et contexte d'exécution" , url: "/Javascript/Fonctions/Environnement-lexical",keywords:['environnement','lexical']},
      {name:"La chaine de portée" , url: "/Javascript/Fonctions/Chaine-de-portée",keywords:['chaine','portée']},
      {name:"Namespace et IIFE" , url: "/Javascript/Fonctions/Namespace",keywords:['namespace']},
      {name:"Le mot-clé this " , url: "/Javascript/Fonctions/This",keywords:['this']},
      {name:"Définir ou lier this" , url: "/Javascript/Fonctions/Definir-lier-this",keywords:['this','lier','definir']},
      {name:"Les fonctions fléchées" , url: "/Javascript/Fonctions/Fonctions-flechees",keywords:['flechees','arrow']},
      {name:"Les fonctions de rappel (callback)" , url: "/Javascript/Fonctions/Fonctions-de-rappel",keywords:['callback']},
      {name:"Les fermetures (closures)" , url: "/Javascript/Fonctions/Fermetures",keywords:['closures']}
    ];
   }
}