import { Injectable } from "@angular/core";

@Injectable()
export class CanvasService {
  public canvasMenu: { name: string; url: string }[];

  constructor() {
    this.canvasMenu = [
      { name: "Introduction à canvas", url: "/Javascript/Canvas/Introduction" },
      { name: "Les bases de canvas", url: "/Javascript/Canvas/Bases" },
      {
        name: "Les cercles et les courbes de Bézier",
        url: "/Javascript/Canvas/Cercles-courbes-de-bezier",
      },
      {
        name: "Mise en pratique et rectangles",
        url: "/Javascript/Canvas/Mise-en-pratique-rectangles",
      },
      { name: "Les dégradés", url: "/Javascript/Canvas/Degrades" },
      {
        name: "Utiliser des images et des motifs",
        url: "/Javascript/Canvas/Utiliser-images-et-motifs",
      },
      { name: "Utiliser des textes", url: "/Javascript/Canvas/Utiliser-textes" },
      { name: "Les transformations", url: "/Javascript/Canvas/Transformations" },
      {
        name: "Les ombres, l'opacité et les limites",
        url: "/Javascript/Canvas/Ombres-opacite-limites",
      },
      { name: "Traitement des pixels", url: "/Javascript/Canvas/Traitement-pixels" },
      { name: "Les bases des animations", url: "/Javascript/Canvas/Bases-animations" },
    ];
  }
}
