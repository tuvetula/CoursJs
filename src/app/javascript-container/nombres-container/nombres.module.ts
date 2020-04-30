import { NgModule } from "@angular/core";
import { NombresContainerComponent } from './nombres-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { NombresIntroductionComponent } from './nombres-introduction/nombres-introduction.component';
import { NombresDecimauxExposantComponent } from './nombres-decimaux-exposant/nombres-decimaux-exposant.component';
import { NombresMethodesDisponiblesGlobalComponent } from './nombres-methodes-disponibles-global/nombres-methodes-disponibles-global.component';
import { NombresMethodesNumberComponent } from './nombres-methodes-number/nombres-methodes-number.component';
import { NombresObjetMathComponent } from './nombres-objet-math/nombres-objet-math.component';


@NgModule({
    declarations:[
        NombresContainerComponent, 
        NombresIntroductionComponent, 
        NombresDecimauxExposantComponent, 
        NombresMethodesDisponiblesGlobalComponent, 
        NombresMethodesNumberComponent, 
        NombresObjetMathComponent],
    imports:[CommonModule, FormsModule, RouterModule, CodeFormatModule]
})
export class NombresModule{}