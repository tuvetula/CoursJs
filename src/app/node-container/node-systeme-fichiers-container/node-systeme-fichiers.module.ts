import { NgModule } from "@angular/core";
import { FsMethodesStatsCopyfileComponent } from './fs-methodes-stats-copyfile/fs-methodes-stats-copyfile.component';
import { FsMethodesRepertoiresComponent } from './fs-methodes-repertoires/fs-methodes-repertoires.component';
import { FsMethodesComponent } from './fs-methodes/fs-methodes.component';
import { FsBinaireEncodageComponent } from './fs-binaire-encodage/fs-binaire-encodage.component';
import { FsOuvrirFermerComponent } from './fs-ouvrir-fermer/fs-ouvrir-fermer.component';
import { FsIntroductionComponent } from './fs-introduction/fs-introduction.component';
import { NodeSystemeFichiersContainerComponent } from './node-systeme-fichiers-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
    declarations:[
        NodeSystemeFichiersContainerComponent,
        FsIntroductionComponent,
        FsOuvrirFermerComponent,
        FsBinaireEncodageComponent,
        FsMethodesComponent,
        FsMethodesRepertoiresComponent,
        FsMethodesStatsCopyfileComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        CodeFormatModule
    ]
})
export class NodeSystemeFichiersModule{}