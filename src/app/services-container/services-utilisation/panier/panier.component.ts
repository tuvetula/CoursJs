import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public panier: string[] = [];
  constructor(private panierService: PanierService) { }
  ngOnInit(): void {
    this.panier = this.panierService.panier;
  }
  removeAliment(index: number): void {
    this.panierService.removeAliment(index);
  }
}


