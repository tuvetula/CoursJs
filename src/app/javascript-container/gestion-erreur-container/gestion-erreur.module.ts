import { NgModule } from "@angular/core";
import { GestionErreurContainerComponent } from './gestion-erreur-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { GestionErreurIntroductionComponent } from './gestion-erreur-introduction/gestion-erreur-introduction.component';
import { GestionErreurEtendreObjetErrorComponent } from './gestion-erreur-etendre-objet-error/gestion-erreur-etendre-objet-error.component';
import { GestionErreurDebogguerComponent } from './gestion-erreur-debogguer/gestion-erreur-debogguer.component';
import { GestionErreurDebogguerVscodeComponent } from './gestion-erreur-debogguer-vscode/gestion-erreur-debogguer-vscode.component';

@NgModule({
    declarations: [GestionErreurContainerComponent, GestionErreurIntroductionComponent, GestionErreurEtendreObjetErrorComponent, GestionErreurDebogguerComponent, GestionErreurDebogguerVscodeComponent],
    imports: [CommonModule,RouterModule,CodeFormatModule]
})
export class GestionErreurModule {}