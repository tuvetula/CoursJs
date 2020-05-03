import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JavascriptContainerComponent } from './javascript-container.component';
import { BasesModule } from './bases-container/bases.module';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { ListMenuLeftModule } from '../shared/modules/listMenuLeft.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { RouterModule } from '@angular/router';
import { ConditionsEtBouclesModule } from './conditions-et-boucles-container/conditions-et-boucles.module';
import { NombresModule } from './nombres-container/nombres.module';
import { StringModule } from './string-container/string.module';
import { ModulesJsContainerComponent } from './modules-js-container/modules-js-container.component';
import { ModulesJsModule } from './modules-js-container/modulesJs.module';
import { DomModule } from './dom-container/dom.module';
import { EvenementsModule } from './evenements-container/evenements.module';

@NgModule({
  declarations: [
    JavascriptContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListMenuLeftModule,
    TitlePageModule,
    BasesModule,
    ConditionsEtBouclesModule,
    NombresModule,
    StringModule,
    ModulesJsModule,
    DomModule,
    EvenementsModule,
    JavascriptRoutingModule
  ],
  providers: []
})
export class JavascriptModule { }
