import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NouveauComponent } from './angular-container/composant-container/nouveau/nouveau.component';
import { ComposantContainerComponent } from './angular-container/composant-container/composant-container.component';
import { EventBindingComponent } from './angular-container/composant-container/event-binding/event-binding.component';
import { DoubleDataBindingComponent } from './angular-container/composant-container/double-data-binding/double-data-binding.component';
import { InterpolationComponent } from './angular-container/composant-container/interpolation/interpolation.component';
import { PropertyBindingComponent } from './angular-container/composant-container/property-binding/property-binding.component';
import { PropertyInputComponent } from './angular-container/composant-container/property-input/property-input.component';
import { PropertyOutputComponent } from './angular-container/composant-container/property-output/property-output.component';
import { PropertyInputChildComponent } from './angular-container/composant-container/property-input/property-input-child/property-input-child.component';
import { PropertyOutputChildComponent } from './angular-container/composant-container/property-output/property-output-child/property-output-child.component';

import { NgIfCustom } from './shared/directives/ngIfCustom.directive';
import { IfRole } from './shared/directives/ifRole.directive';

import { AuthService } from './shared/services/authService.service';
import { LogService } from './shared/services/log.service';

import { AddComponent } from './angular-container/services-container/services-utilisation/add/add.component';
import { PanierComponent } from './angular-container/services-container/services-utilisation/panier/panier.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './NavBarList/navbar/navbar.component';

import { DirectiveContainerComponent } from './angular-container/directive-container/directive-container.component';
import { NgIfComponent } from './angular-container/directive-container/ng-if/ng-if.component';
import { NgForComponent } from './angular-container/directive-container/ng-for/ng-for.component';
import { NgClassComponent } from './angular-container/directive-container/ng-class/ng-class.component';
import { NgStyleComponent } from './angular-container/directive-container/ng-style/ng-style.component';

import { DirectivePersoComponent } from './angular-container/directive-container/directive-perso/directive-perso.component';
import { SurlignerDirective } from './shared/directives/surlignage.directive';
import { HostlistenerComponent } from './angular-container/directive-container/hostlistener/hostlistener.component';
import { HostbindingComponent } from './angular-container/directive-container/hostbinding/hostbinding.component';
import { SurlignerHostListenerDirective } from './shared/directives/surlignageHostListener.directive';
import { SurlignerHostBindingDirective } from './shared/directives/surlignageHostBinding.directive';
import { LiaisonProprieteDirectiveComponent } from './angular-container/directive-container/liaison-propriete-directive/liaison-propriete-directive.component';
import { SurlignerLiaisonDirective } from './shared/directives/surlignageLiaison.directive';
import { SurlignerLiaison1Directive } from './shared/directives/surlignageLiaison1.directive';
import { DirectiveStructurelleCreationComponent } from './angular-container/directive-container/directive-structurelle-creation/directive-structurelle-creation.component';
import { FruitItemsComponent } from './angular-container/composant-container/property-output/fruit-items/fruit-items.component';
import { EncapsulationComponent } from './angular-container/composant-container/encapsulation/encapsulation.component';
import { ObservablesContainerComponent } from './angular-container/observables-container/observables-container.component';
import { ObservablesIntroductionComponent } from './angular-container/observables-container/observables-introduction/observables-introduction.component';
import { CreationObservableComponent } from './angular-container/observables-container/creation-observable/creation-observable.component';
import { IntroductionSubjectsComponent } from './angular-container/observables-container/introduction-subjects/introduction-subjects.component';
import { UtilisationSubjectsComponent } from './angular-container/observables-container/utilisation-subjects/utilisation-subjects.component';
import { OperateursPipesRxjsComponent } from './angular-container/observables-container/operateurs-pipes-rxjs/operateurs-pipes-rxjs.component';
import { TextColorGreenDirective } from './shared/directives/text-color-green.directive';
import { CodeFormatDirective } from './shared/directives/code-format.directive';
import { ServicesContainerComponent } from './angular-container/services-container/services-container.component';
import { ServicesDefinitionComponent } from './angular-container/services-container/services-definition/services-definition.component';
import { ServicesInjectionDefinitionComponent } from './angular-container/services-container/services-injection-definition/services-injection-definition.component';
import { ServicesHierarchieComponent } from './angular-container/services-container/services-hierarchie/services-hierarchie.component';
import { ServicesUtilisationComponent } from './angular-container/services-container/services-utilisation/services-utilisation.component';
import { VariableLocaleComponent } from './angular-container/composant-container/variable-locale/variable-locale.component';
import { VariableLocaleChildrenComponent } from './angular-container/composant-container/variable-locale/variable-locale-children/variable-locale-children.component';
import { ViewChildComponent } from './angular-container/composant-container/view-child/view-child.component';
import { ViewChildChildrenComponent } from './angular-container/composant-container/view-child/view-child-children/view-child-children.component';
import { NgContentComponent } from './angular-container/composant-container/ng-content/ng-content.component';
import { NgContentChildrenComponent } from './angular-container/composant-container/ng-content/ng-content-children/ng-content-children.component';
import { ContentChildComponent } from './angular-container/composant-container/content-child/content-child.component';
import { LifeCycleOfComponentsComponent } from './angular-container/composant-container/life-cycle-of-components/life-cycle-of-components.component';
import { RoutingContainerComponent } from './angular-container/routing-container/routing-container.component';
import { RoutingIntroductionComponent } from './angular-container/routing-container/routing-introduction/routing-introduction.component';
import { RouterLinkComponent } from './angular-container/routing-container/router-link/router-link.component';
import { RouterLinkActiveComponent } from './angular-container/routing-container/router-link-active/router-link-active.component';
import { ParamsComponent } from './angular-container/routing-container/params/params.component';
import { QueryParamsFragmentComponent } from './angular-container/routing-container/query-params-fragment/query-params-fragment.component';
import { RoutesImbriqueesComponent } from './angular-container/routing-container/routes-imbriquees/routes-imbriquees.component';
import { RedirectionWildcardComponent } from './angular-container/routing-container/redirection-wildcard/redirection-wildcard.component';
import { SeparerFichierRoutingComponent } from './angular-container/routing-container/separer-fichier-routing/separer-fichier-routing.component';
import { GardeCanActivateComponent } from './angular-container/routing-container/garde-can-activate/garde-can-activate.component';
import { GardeCanDeactivateComponent } from './angular-container/routing-container/garde-can-deactivate/garde-can-deactivate.component';
import { GardeResolverComponent } from './angular-container/routing-container/garde-resolver/garde-resolver.component';
import { ActivatedRouteRouterComponent } from './angular-container/routing-container/activated-route-router/activated-route-router.component';
import { ListMenuLeftComponent } from './NavBarList/list-menu-left/list-menu-left.component';
import { PageNotFound404Component } from './page-not-found404/page-not-found404.component';
import { FormulairesContainerComponent } from './angular-container/formulaires-container/formulaires-container.component';
import { IntroductionReactiveformComponent } from './angular-container/formulaires-container/introduction-reactiveform/introduction-reactiveform.component';
import { CreationFormulaireReactifComponent } from './angular-container/formulaires-container/creation-formulaire-reactif/creation-formulaire-reactif.component';
import { ApiFormcontrolFormgroupComponent } from './angular-container/formulaires-container/api-formcontrol-formgroup/api-formcontrol-formgroup.component';
import { ValueEtResetComponent } from './angular-container/formulaires-container/value-et-reset/value-et-reset.component';
import { ValidateursComponent } from './angular-container/formulaires-container/validateurs/validateurs.component';
import { MessageErreurComponent } from './angular-container/formulaires-container/message-erreur/message-erreur.component';
import { ClassesEtatsAbstractcontrolComponent } from './angular-container/formulaires-container/classes-etats-abstractcontrol/classes-etats-abstractcontrol.component';
import { FormgroupsImbriquesComponent } from './angular-container/formulaires-container/formgroups-imbriques/formgroups-imbriques.component';
import { FormarrayComponent } from './angular-container/formulaires-container/formarray/formarray.component';
import { FormbuilderComponent } from './angular-container/formulaires-container/formbuilder/formbuilder.component';
import { FormgroupEventemitterComponent } from './angular-container/formulaires-container/formgroup-eventemitter/formgroup-eventemitter.component';
import { FormulairesExempleComponent } from './angular-container/formulaires-container/formulaires-exemple/formulaires-exemple.component';
import { PipesContainerComponent } from './angular-container/pipes-container/pipes-container.component';
import { PipesIntroductionComponent } from './angular-container/pipes-container/pipes-introduction/pipes-introduction.component';
import { PipesUtilisationComponent } from './angular-container/pipes-container/pipes-utilisation/pipes-utilisation.component';
import { PipesPersonnaliseCreationComponent } from './angular-container/pipes-container/pipes-personnalise-creation/pipes-personnalise-creation.component';
import { PipesPursEtImpursComponent } from './angular-container/pipes-container/pipes-purs-et-impurs/pipes-purs-et-impurs.component';
import { PipesAsynchroneComponent } from './angular-container/pipes-container/pipes-asynchrone/pipes-asynchrone.component';

import { AngularContainerComponent } from './angular-container/angular-container.component';
import { PipesExempleComponent } from './angular-container/pipes-container/pipes-exemple/pipes-exemple.component';
import { AngularService } from './shared/services/Angular/angular.service';
import { SousMenuComponent } from './NavBarList/sous-menu/sous-menu.component';
import { CbPipes } from './shared/pipes/cb.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { RequetesHttpContainerComponent } from './angular-container/requetes-http-container/requetes-http-container.component';
import { HttpIntroductionComponent } from './angular-container/requetes-http-container/http-introduction/http-introduction.component';
import { HttpUtilisationFirebaseComponent } from './angular-container/requetes-http-container/http-utilisation-firebase/http-utilisation-firebase.component';
import { HttpFaireRequetesComponent } from './angular-container/requetes-http-container/http-faire-requetes/http-faire-requetes.component';
import { HttpHeadersGestionErreurComponent } from './angular-container/requetes-http-container/http-headers-gestion-erreur/http-headers-gestion-erreur.component';
import { HttpUsagesAvancesComponent } from './angular-container/requetes-http-container/http-usages-avances/http-usages-avances.component';
import { HttpExempleComponent } from './angular-container/requetes-http-container/http-exemple/http-exemple.component';
import { ListMenuLeftService } from './shared/services/list-menu-left.service';
import { ReqInterceptor } from './shared/Interceptor/http.interceptor';

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
    ObservablesIntroductionComponent,
    CreationObservableComponent,
    IntroductionSubjectsComponent,
    UtilisationSubjectsComponent,
    OperateursPipesRxjsComponent,
    TextColorGreenDirective,
    CodeFormatDirective,
    ServicesContainerComponent,
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
    ContentChildComponent,
    LifeCycleOfComponentsComponent,
    RoutingContainerComponent,
    RoutingIntroductionComponent,
    RouterLinkComponent,
    RouterLinkActiveComponent,
    ParamsComponent,
    QueryParamsFragmentComponent,
    RoutesImbriqueesComponent,
    RedirectionWildcardComponent,
    SeparerFichierRoutingComponent,
    GardeCanActivateComponent,
    GardeCanDeactivateComponent,
    GardeResolverComponent,
    ActivatedRouteRouterComponent,
    ListMenuLeftComponent,
    PageNotFound404Component,
    FormulairesContainerComponent,
    IntroductionReactiveformComponent,
    CreationFormulaireReactifComponent,
    ApiFormcontrolFormgroupComponent,
    ValueEtResetComponent,
    ValidateursComponent,
    MessageErreurComponent,
    ClassesEtatsAbstractcontrolComponent,
    FormgroupsImbriquesComponent,
    FormarrayComponent,
    FormbuilderComponent,
    FormgroupEventemitterComponent,
    FormulairesExempleComponent,
    PipesContainerComponent,
    PipesIntroductionComponent,
    PipesUtilisationComponent,
    PipesPersonnaliseCreationComponent,
    PipesPursEtImpursComponent,
    PipesAsynchroneComponent,
    PipesExempleComponent,
    AngularContainerComponent,
    SousMenuComponent,
    CbPipes,
    FilterPipe,
    RequetesHttpContainerComponent,
    HttpIntroductionComponent,
    HttpUtilisationFirebaseComponent,
    HttpFaireRequetesComponent,
    HttpHeadersGestionErreurComponent,
    HttpUsagesAvancesComponent,
    HttpExempleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AngularService,
    AuthService,
    LogService,
    ListMenuLeftService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


