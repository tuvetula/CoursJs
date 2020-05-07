import { NgModule } from "@angular/core";
import { ObjetsContainerComponent } from './objets-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { ObjetsIntroductionComponent } from './objets-introduction/objets-introduction.component';
import { ObjetsProprietesComponent } from './objets-proprietes/objets-proprietes.component';
import { ObjetsRaccourcisSyntaxiquesComponent } from './objets-raccourcis-syntaxiques/objets-raccourcis-syntaxiques.component';
import { ObjetsDecompositionComponent } from './objets-decomposition/objets-decomposition.component';
import { ObjetsTestExistenceValeurComponent } from './objets-test-existence-valeur/objets-test-existence-valeur.component';
import { ObjetsSupprimerProprietesComponent } from './objets-supprimer-proprietes/objets-supprimer-proprietes.component';
import { ObjetsFusionnerComponent } from './objets-fusionner/objets-fusionner.component';
import { ObjetsComparerComponent } from './objets-comparer/objets-comparer.component';
import { ObjetsItererComponent } from './objets-iterer/objets-iterer.component';
import { ObjetsFormatJsonComponent } from './objets-format-json/objets-format-json.component';
import { ObjetsCopierComponent } from './objets-copier/objets-copier.component';
import { ObjetsObjectifsDescriptionProprietesComponent } from './objets-objectifs-description-proprietes/objets-objectifs-description-proprietes.component';
import { ObjetsAccesseursMutateursComponent } from './objets-accesseurs-mutateurs/objets-accesseurs-mutateurs.component';
import { ObjetsPooConstructeursComponent } from './objets-poo-constructeurs/objets-poo-constructeurs.component';
import { ObjetsIntroductionPrototypesComponent } from './objets-introduction-prototypes/objets-introduction-prototypes.component';
import { ObjetsPatternConstructeurProprietePrototypeComponent } from './objets-pattern-constructeur-propriete-prototype/objets-pattern-constructeur-propriete-prototype.component';
import { ObjetsPrototypesNatifsComponent } from './objets-prototypes-natifs/objets-prototypes-natifs.component';
import { ObjetsUtilisationPrototypesComponent } from './objets-utilisation-prototypes/objets-utilisation-prototypes.component';
import { ObjetsApiObjectComponent } from './objets-api-object/objets-api-object.component';

@NgModule({
    declarations:[ObjetsContainerComponent, ObjetsIntroductionComponent, ObjetsProprietesComponent, ObjetsRaccourcisSyntaxiquesComponent, ObjetsDecompositionComponent, ObjetsTestExistenceValeurComponent, ObjetsSupprimerProprietesComponent, ObjetsFusionnerComponent, ObjetsComparerComponent, ObjetsItererComponent, ObjetsFormatJsonComponent, ObjetsCopierComponent, ObjetsObjectifsDescriptionProprietesComponent, ObjetsAccesseursMutateursComponent, ObjetsPooConstructeursComponent, ObjetsIntroductionPrototypesComponent, ObjetsPatternConstructeurProprietePrototypeComponent, ObjetsPrototypesNatifsComponent, ObjetsUtilisationPrototypesComponent, ObjetsApiObjectComponent],
    imports:[CommonModule,RouterModule,FormsModule,CodeFormatModule]
})
export class ObjetsModule{}