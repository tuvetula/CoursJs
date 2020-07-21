import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesContainerComponent } from './pipes-container.component';
import { PipesIntroductionComponent } from './pipes-introduction/pipes-introduction.component';
import { PipesUtilisationComponent } from './pipes-utilisation/pipes-utilisation.component';
import { PipesPersonnaliseCreationComponent } from './pipes-personnalise-creation/pipes-personnalise-creation.component';
import { PipesPursEtImpursComponent } from './pipes-purs-et-impurs/pipes-purs-et-impurs.component';
import { PipesAsynchroneComponent } from './pipes-asynchrone/pipes-asynchrone.component';
import { PipesExempleComponent } from './pipes-exemple/pipes-exemple.component';
import { CbPipes } from 'src/app/shared/pipes/Angular/pipesModule/cb.pipe';
import { FilterPipe } from 'src/app/shared/pipes/Angular/pipesModule/filter.pipe';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { PipesRoutingModule } from './pipes-routing.module';

@NgModule({
    declarations: [
        PipesContainerComponent,
        PipesIntroductionComponent,
        PipesUtilisationComponent,
        PipesPersonnaliseCreationComponent,
        PipesPursEtImpursComponent,
        PipesAsynchroneComponent,
        PipesExempleComponent,
        CbPipes,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CodeFormatModule,
        PipesRoutingModule
    ],
    providers: []
})

export class PipesModule {}