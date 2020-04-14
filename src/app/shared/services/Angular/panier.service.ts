import { Injectable } from '@angular/core';

@Injectable()
export class PanierService {
    public panier: string[] = [];
    constructor(){ }
    add(aliment: string): void {
        this.panier.push(aliment);
        console.log('L\'aliment '+aliment+' a bien été ajouté au panier!');
    }
    removeAliment(index: number): void {
        let alimentName = this.panier[index];
        this.panier.splice(index,1);
        console.log('L\'aliment '+ alimentName +' a bien été retiré du panier!');
    }
}

