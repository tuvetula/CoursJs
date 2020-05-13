import { NgModule } from "@angular/core";
import { ClassesContainerComponent } from './classes-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { ClassesDeclarationComponent } from './classes-declaration/classes-declaration.component';
import { ClassesHeritageComponent } from './classes-heritage/classes-heritage.component';
import { ClassesMethodeStatiqueComponent } from './classes-methode-statique/classes-methode-statique.component';
import { ClassesProprietePriveeComponent } from './classes-propriete-privee/classes-propriete-privee.component';
import { ClassesExtendsComponent } from './classes-extends/classes-extends.component';
import { ClassesInstanceofComponent } from './classes-instanceof/classes-instanceof.component';
import { ClassesMixinsComponent } from './classes-mixins/classes-mixins.component';

@NgModule({
    declarations: [ClassesContainerComponent, ClassesDeclarationComponent, ClassesHeritageComponent, ClassesMethodeStatiqueComponent, ClassesProprietePriveeComponent, ClassesExtendsComponent, ClassesInstanceofComponent, ClassesMixinsComponent],
    imports: [CommonModule,RouterModule,CodeFormatModule]
})
export class ClassesModule{}