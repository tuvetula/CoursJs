import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class PanierService {
    public panier: string[] = [];
    constructor(private logService: LogService){ }
    add(aliment: string): void {
        this.panier.push(aliment);
        this.logService.log('L\'aliment '+aliment+' a bien été ajouté au panier!');
    }
    removeAliment(index: number): void {
        let alimentName = this.panier[index];
        this.panier.splice(index,1);
        this.logService.log('L\'aliment '+ alimentName +' a bien été retiré du panier!');
    }
}

