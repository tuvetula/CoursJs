import { Injectable } from "@angular/core";

@Injectable()
export class CanvasService {
  public canvasMenu: { name: string; url: string }[];

  constructor() {
    this.canvasMenu = [
      { name: "Introduction à canvas", url: "Canvas/Introduction" },
      { name: "Les bases de canvas", url: "Canvas/Bases" },
      {
        name: "Les cercles et les courbes de Bézier",
        url: "Canvas/Cercles-courbes-de-bezier",
      },
      {
        name: "Mise en pratique et rectangles",
        url: "Canvas/Mise-en-pratique-rectangles",
      },
      { name: "Les dégradés", url: "Canvas/Degrades" },
      {
        name: "Utiliser des images et des motifs",
        url: "Canvas/Utiliser-images-et-motifs",
      },
      { name: "Utiliser des textes", url: "Canvas/Utiliser-textes" },
      { name: "Les transformations", url: "Canvas/Transformations" },
      {
        name: "Les ombres, l'opacité et les limites",
        url: "Canvas/Ombres-opacite-limites",
      },
      { name: "Traitement des pixels", url: "Canvas/Traitement-pixels" },
      { name: "Les bases des animations", url: "Canvas/Bases-animations" },
    ];
  }
}
