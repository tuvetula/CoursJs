import { Injectable } from "@angular/core";
import { LessonMenuModel } from 'src/app/shared/models/Menus/menus.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  public canvasMenu: LessonMenuModel[];

  constructor() {
    this.canvasMenu = [
      { name: "Introduction à canvas", url: "/Javascript/Canvas/Introduction" },
      { name: "Les bases de canvas", url: "/Javascript/Canvas/Bases",keywords:['bases']},
      {
        name: "Les cercles et les courbes de Bézier",
        url: "/Javascript/Canvas/Cercles-courbes-de-bezier",keywords:['cercles','courbes','bezier']
      },
      {
        name: "Mise en pratique et rectangles",
        url: "/Javascript/Canvas/Mise-en-pratique-rectangles",keywords:['rectangles']
      },
      { name: "Les dégradés", url: "/Javascript/Canvas/Degrades",keywords:['degrades'] },
      {
        name: "Utiliser des images et des motifs",
        url: "/Javascript/Canvas/Utiliser-images-et-motifs",keywords:['images','motifs']
      },
      { name: "Utiliser des textes", url: "/Javascript/Canvas/Utiliser-textes",keywords:['textes'] },
      { name: "Les transformations", url: "/Javascript/Canvas/Transformations",keywords:['transformations'] },
      {
        name: "Les ombres, l'opacité et les limites",
        url: "/Javascript/Canvas/Ombres-opacite-limites",keywords:['ombres','opacites','limites']
      },
      { name: "Traitement des pixels", url: "/Javascript/Canvas/Traitement-pixels",keywords:['traitement','pixels'] },
      { name: "Les bases des animations", url: "/Javascript/Canvas/Bases-animations",keywords:['animations','bases'] },
    ];
  }
}
