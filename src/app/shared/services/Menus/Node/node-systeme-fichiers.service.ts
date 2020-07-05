import { Injectable } from '@angular/core';
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class NodeSystemeFichiersService {
  public nodeSystemeFichiersMenu: LessonMenuModel[];
  constructor() { 
    this.nodeSystemeFichiersMenu = [
      {
        name: "Introduction au module fs",
        url: "/Node/Systeme-fichiers/Introduction",
        keywords: []
      },
      {
        name: "Ouvrir ou fermer un fichier",
        url: "/Node/Systeme-fichiers/Ouvrir-fermer-fichier",
        keywords: ['open','close']
      },{
        name: "Le binaire, l'encodage et les méthodes read et write",
        url: "/Node/Systeme-fichiers/Binaire-encodage-read-write",
        keywords: ['binaire','utf-8','buffer','ArrayBuffer','TypedArray']
      },{
        name: "Les méthodes readFile, writeFile, appendFile et unlink",
        url: "/Node/Systeme-fichiers/Methodes",
        keywords: ['readFile','writeFile','appendFile','unlink']
      },{
        name: "Les méthodes pour gérer les répertoires",
        url: "/Node/Systeme-fichiers/Methodes-repertoires",
        keywords: ['mkdir','rmdir','readdir']
      },{
        name: "Les méthodes stats et copyFile",
        url: "/Node/Systeme-fichiers/Methodes-stats-copyFile",
        keywords: ['copyFile','stats']
      },
    ]
  }
}
