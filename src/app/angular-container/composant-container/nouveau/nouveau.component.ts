import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-nouveau",
  templateUrl: "./nouveau.component.html",
  styleUrls: ["./nouveau.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NouveauComponent implements OnInit {
  public nom: string;
  constructor() {
    this.nom = "composant nouveau";
  }

  ngOnInit(): void {}
}
