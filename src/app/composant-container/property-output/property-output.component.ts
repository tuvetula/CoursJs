import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-output',
  templateUrl: './property-output.component.html',
  styleUrls: ['./property-output.component.css']
})
export class PropertyOutputComponent implements OnInit {
  public compteur: number = 0;

  public fruit: string = "";
  public fruits: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public updateCompteur(newCompteurValue: number){
    this.compteur = newCompteurValue;
  }
  public deleteFruit(fruit: string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }
}
