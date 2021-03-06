import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JavascriptContainerComponent } from './javascript-container.component';
import { BasesModule } from './bases-container/bases.module';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { LessonsMenuModule } from '../shared/modules/lessons-menu.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { RouterModule } from '@angular/router';
import { ConditionsEtBouclesModule } from './conditions-et-boucles-container/conditions-et-boucles.module';
import { NombresModule } from './nombres-container/nombres.module';
import { StringModule } from './string-container/string.module';
import { ModulesJsModule } from './modules-js-container/modulesJs.module';
import { DomModule } from './dom-container/dom.module';
import { EvenementsModule } from './evenements-container/evenements.module';
import { AsynchroneModule } from './asynchrone-container/asynchrone.module';
import { ReseauModule } from './reseau-container/reseau.module';
import { DateModule } from './date-container/date.module';
import { LocationHistoryModule } from './location-history-container/location-history.module';
import { ObjetsModule } from './objets-container/objets.module';
import { FonctionsModule } from './fonctions-container/fonctions.module';
import { TableauxModule } from './tableaux-container/tableaux.module';
import { ClassesModule } from './classes-container/classes.module';
import { GestionErreurModule } from './gestion-erreur-container/gestion-erreur.module';
import { CanvasModule } from './canvas-container/canvas.module';
import { CookieModule } from './cookie-container/cookie.module';

@NgModule({
  declarations: [
    JavascriptContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LessonsMenuModule,
    TitlePageModule,
    BasesModule,
    ConditionsEtBouclesModule,
    NombresModule,
    StringModule,
    ModulesJsModule,
    DomModule,
    EvenementsModule,
    AsynchroneModule,
    ReseauModule,
    DateModule,
    LocationHistoryModule,
    ObjetsModule,
    FonctionsModule,
    TableauxModule,
    ClassesModule,
    GestionErreurModule,
    CanvasModule,
    CookieModule,
    JavascriptRoutingModule
  ],
  providers: []
})
export class JavascriptModule { }
