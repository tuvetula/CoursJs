import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NouveauComponent } from './composant-container/nouveau/nouveau.component';
import { ComposantContainerComponent } from './composant-container/composant-container.component';
import { EventBindingComponent } from './composant-container/event-binding/event-binding.component';
import { DoubleDataBindingComponent } from './composant-container/double-data-binding/double-data-binding.component';
import { InterpolationComponent } from './composant-container/interpolation/interpolation.component';
import { PropertyBindingComponent } from './composant-container/property-binding/property-binding.component';
import { PropertyInputComponent } from './composant-container/property-input/property-input.component';
import { PropertyOutputComponent } from './composant-container/property-output/property-output.component';
import { PropertyInputChildComponent } from './composant-container/property-input/property-input-child/property-input-child.component';
import { PropertyOutputChildComponent } from './composant-container/property-output/property-output-child/property-output-child.component';

import { NgIfCustom } from './shared/directives/ngIfCustom.directive';
import { IfRole } from './shared/directives/ifRole.directive';

import { AuthService } from './shared/services/authService.service';
import { DataBindingService } from './shared/services/data-binding.service';
import { DirectiveService } from './shared/services/directive.service';
import { LogService } from './shared/services/log.service';
import { AddComponent } from './services-container/services-utilisation/add/add.component';
import { PanierComponent } from './services-container/services-utilisation/panier/panier.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';

import { DirectiveContainerComponent } from './directive-container/directive-container.component';
import { NgIfComponent } from './directive-container/ng-if/ng-if.component';
import { DirectiveListComponent } from './directive-container/directive-list/directive-list.component';
import { NgForComponent } from './directive-container/ng-for/ng-for.component';
import { NgClassComponent } from './directive-container/ng-class/ng-class.component';
import { NgStyleComponent } from './directive-container/ng-style/ng-style.component';

import { DirectivePersoComponent } from './directive-container/directive-perso/directive-perso.component';
import { SurlignerDirective } from './shared/directives/surlignage.directive';
import { HostlistenerComponent } from './directive-container/hostlistener/hostlistener.component';
import { HostbindingComponent } from './directive-container/hostbinding/hostbinding.component';
import { SurlignerHostListenerDirective } from './shared/directives/surlignageHostListener.directive';
import { SurlignerHostBindingDirective } from './shared/directives/surlignageHostBinding.directive';
import { LiaisonProprieteDirectiveComponent } from './directive-container/liaison-propriete-directive/liaison-propriete-directive.component';
import { SurlignerLiaisonDirective } from './shared/directives/surlignageLiaison.directive';
import { SurlignerLiaison1Directive } from './shared/directives/surlignageLiaison1.directive';
import { DirectiveStructurelleCreationComponent } from './directive-container/directive-structurelle-creation/directive-structurelle-creation.component';
import { ObservableService } from './shared/services/observable.service';
import { FruitItemsComponent } from './composant-container/property-output/fruit-items/fruit-items.component';
import { EncapsulationComponent } from './composant-container/encapsulation/encapsulation.component';
import { ObservablesContainerComponent } from './observables-container/observables-container.component';
import { ObservablesListComponent } from './observables-container/observables-list/observables-list.component';
import { ObservablesIntroductionComponent } from './observables-container/observables-introduction/observables-introduction.component';
import { CreationObservableComponent } from './observables-container/creation-observable/creation-observable.component';
import { IntroductionSubjectsComponent } from './observables-container/introduction-subjects/introduction-subjects.component';
import { UtilisationSubjectsComponent } from './observables-container/utilisation-subjects/utilisation-subjects.component';
import { OperateursPipesRxjsComponent } from './observables-container/operateurs-pipes-rxjs/operateurs-pipes-rxjs.component';
import { TextColorGreenDirective } from './shared/directives/text-color-green.directive';
import { CodeFormatDirective } from './shared/directives/code-format.directive';
import { ServicesService } from './shared/services/services.service';
import { ServicesContainerComponent } from './services-container/services-container.component';
import { ServicesListComponent } from './services-container/services-list/services-list.component';
import { ServicesDefinitionComponent } from './services-container/services-definition/services-definition.component';
import { ServicesInjectionDefinitionComponent } from './services-container/services-injection-definition/services-injection-definition.component';
import { ServicesHierarchieComponent } from './services-container/services-hierarchie/services-hierarchie.component';
import { ServicesUtilisationComponent } from './services-container/services-utilisation/services-utilisation.component';
import { VariableLocaleComponent } from './composant-container/variable-locale/variable-locale.component';
import { VariableLocaleChildrenComponent } from './composant-container/variable-locale/variable-locale-children/variable-locale-children.component';
import { ViewChildComponent } from './composant-container/view-child/view-child.component';
import { ViewChildChildrenComponent } from './composant-container/view-child/view-child-children/view-child-children.component';
import { NgContentComponent } from './composant-container/ng-content/ng-content.component';
import { NgContentChildrenComponent } from './composant-container/ng-content/ng-content-children/ng-content-children.component';
import { ContentChildComponent } from './composant-container/content-child/content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveauComponent,
    NgIfCustom,
    IfRole,
    AddComponent,
    PanierComponent,
    HomepageComponent,
    ComposantContainerComponent,
    EventBindingComponent,
    DoubleDataBindingComponent,
    InterpolationComponent,
    NavbarComponent,
    PropertyBindingComponent,
    DirectiveContainerComponent,
    NgIfComponent,
    DirectiveListComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PropertyInputComponent,
    PropertyOutputComponent,
    PropertyInputChildComponent,
    PropertyOutputChildComponent,
    DirectivePersoComponent,
    SurlignerDirective,
    HostlistenerComponent,
    HostbindingComponent,
    SurlignerHostListenerDirective,
    SurlignerHostBindingDirective,
    LiaisonProprieteDirectiveComponent,
    SurlignerLiaisonDirective,
    SurlignerLiaison1Directive,
    DirectiveStructurelleCreationComponent,
    FruitItemsComponent,
    EncapsulationComponent,
    ObservablesContainerComponent,
    ObservablesListComponent,
    ObservablesIntroductionComponent,
    CreationObservableComponent,
    IntroductionSubjectsComponent,
    UtilisationSubjectsComponent,
    OperateursPipesRxjsComponent,
    TextColorGreenDirective,
    CodeFormatDirective,
    ServicesContainerComponent,
    ServicesListComponent,
    ServicesDefinitionComponent,
    ServicesInjectionDefinitionComponent,
    ServicesHierarchieComponent,
    ServicesUtilisationComponent,
    VariableLocaleComponent,
    VariableLocaleChildrenComponent,
    ViewChildComponent,
    ViewChildChildrenComponent,
    NgContentComponent,
    NgContentChildrenComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [AuthService,
    LogService,
    DataBindingService,
    DirectiveService,
    ObservableService,
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
