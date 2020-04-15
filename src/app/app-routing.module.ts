import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { DirectiveContainerComponent } from "./angular-container/directive-container/directive-container.component";
import { NgIfComponent } from "./angular-container/directive-container/ng-if/ng-if.component";
import { NgForComponent } from "./angular-container/directive-container/ng-for/ng-for.component";
import { NgStyleComponent } from "./angular-container/directive-container/ng-style/ng-style.component";
import { NgClassComponent } from "./angular-container/directive-container/ng-class/ng-class.component";
import { DirectivePersoComponent } from "./angular-container/directive-container/directive-perso/directive-perso.component";
import { HostlistenerComponent } from "./angular-container/directive-container/hostlistener/hostlistener.component";
import { HostbindingComponent } from "./angular-container/directive-container/hostbinding/hostbinding.component";
import { LiaisonProprieteDirectiveComponent } from "./angular-container/directive-container/liaison-propriete-directive/liaison-propriete-directive.component";
import { DirectiveStructurelleCreationComponent } from "./angular-container/directive-container/directive-structurelle-creation/directive-structurelle-creation.component";
import { ObservablesContainerComponent } from "./angular-container/observables-container/observables-container.component";
import { ObservablesIntroductionComponent } from "./angular-container/observables-container/observables-introduction/observables-introduction.component";
import { CreationObservableComponent } from "./angular-container/observables-container/creation-observable/creation-observable.component";
import { IntroductionSubjectsComponent } from "./angular-container/observables-container/introduction-subjects/introduction-subjects.component";
import { UtilisationSubjectsComponent } from "./angular-container/observables-container/utilisation-subjects/utilisation-subjects.component";
import { OperateursPipesRxjsComponent } from "./angular-container/observables-container/operateurs-pipes-rxjs/operateurs-pipes-rxjs.component";
import { ServicesDefinitionComponent } from "./angular-container/services-container/services-definition/services-definition.component";
import { ServicesInjectionDefinitionComponent } from "./angular-container/services-container/services-injection-definition/services-injection-definition.component";
import { ServicesHierarchieComponent } from "./angular-container/services-container/services-hierarchie/services-hierarchie.component";
import { ServicesUtilisationComponent } from "./angular-container/services-container/services-utilisation/services-utilisation.component";
import { ServicesContainerComponent } from "./angular-container/services-container/services-container.component";
import { RoutingContainerComponent } from "./angular-container/routing-container/routing-container.component";
import { RoutingIntroductionComponent } from "./angular-container/routing-container/routing-introduction/routing-introduction.component";
import { RouterLinkComponent } from "./angular-container/routing-container/router-link/router-link.component";
import { RouterLinkActiveComponent } from "./angular-container/routing-container/router-link-active/router-link-active.component";
import { ActivatedRouteRouterComponent } from "./angular-container/routing-container/activated-route-router/activated-route-router.component";
import { ParamsComponent } from "./angular-container/routing-container/params/params.component";
import { QueryParamsFragmentComponent } from "./angular-container/routing-container/query-params-fragment/query-params-fragment.component";
import { RoutesImbriqueesComponent } from "./angular-container/routing-container/routes-imbriquees/routes-imbriquees.component";
import { RedirectionWildcardComponent } from "./angular-container/routing-container/redirection-wildcard/redirection-wildcard.component";
import { SeparerFichierRoutingComponent } from "./angular-container/routing-container/separer-fichier-routing/separer-fichier-routing.component";
import { GardeCanActivateComponent } from "./angular-container/routing-container/garde-can-activate/garde-can-activate.component";
import { GardeCanDeactivateComponent } from "./angular-container/routing-container/garde-can-deactivate/garde-can-deactivate.component";
import { GardeResolverComponent } from "./angular-container/routing-container/garde-resolver/garde-resolver.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";
import { FormulairesContainerComponent } from "./angular-container/formulaires-container/formulaires-container.component";
import { IntroductionReactiveformComponent } from "./angular-container/formulaires-container/introduction-reactiveform/introduction-reactiveform.component";
import { CreationFormulaireReactifComponent } from "./angular-container/formulaires-container/creation-formulaire-reactif/creation-formulaire-reactif.component";
import { ApiFormcontrolFormgroupComponent } from "./angular-container/formulaires-container/api-formcontrol-formgroup/api-formcontrol-formgroup.component";
import { ValueEtResetComponent } from "./angular-container/formulaires-container/value-et-reset/value-et-reset.component";
import { ValidateursComponent } from "./angular-container/formulaires-container/validateurs/validateurs.component";
import { MessageErreurComponent } from "./angular-container/formulaires-container/message-erreur/message-erreur.component";
import { ClassesEtatsAbstractcontrolComponent } from "./angular-container/formulaires-container/classes-etats-abstractcontrol/classes-etats-abstractcontrol.component";
import { FormgroupsImbriquesComponent } from "./angular-container/formulaires-container/formgroups-imbriques/formgroups-imbriques.component";
import { FormarrayComponent } from "./angular-container/formulaires-container/formarray/formarray.component";
import { FormbuilderComponent } from "./angular-container/formulaires-container/formbuilder/formbuilder.component";
import { FormgroupEventemitterComponent } from "./angular-container/formulaires-container/formgroup-eventemitter/formgroup-eventemitter.component";
import { FormulairesExempleComponent } from "./angular-container/formulaires-container/formulaires-exemple/formulaires-exemple.component";
import { PipesContainerComponent } from "./angular-container/pipes-container/pipes-container.component";
import { PipesExempleComponent } from "./angular-container/pipes-container/pipes-exemple/pipes-exemple.component";
import { PipesIntroductionComponent } from "./angular-container/pipes-container/pipes-introduction/pipes-introduction.component";
import { PipesUtilisationComponent } from "./angular-container/pipes-container/pipes-utilisation/pipes-utilisation.component";
import { PipesPersonnaliseCreationComponent } from "./angular-container/pipes-container/pipes-personnalise-creation/pipes-personnalise-creation.component";
import { PipesPursEtImpursComponent } from "./angular-container/pipes-container/pipes-purs-et-impurs/pipes-purs-et-impurs.component";
import { PipesAsynchroneComponent } from "./angular-container/pipes-container/pipes-asynchrone/pipes-asynchrone.component";
import { RequetesHttpContainerComponent } from "./angular-container/requetes-http-container/requetes-http-container.component";
import { HttpIntroductionComponent } from "./angular-container/requetes-http-container/http-introduction/http-introduction.component";
import { HttpUtilisationFirebaseComponent } from "./angular-container/requetes-http-container/http-utilisation-firebase/http-utilisation-firebase.component";
import { HttpFaireRequetesComponent } from "./angular-container/requetes-http-container/http-faire-requetes/http-faire-requetes.component";
import { HttpHeadersGestionErreurComponent } from "./angular-container/requetes-http-container/http-headers-gestion-erreur/http-headers-gestion-erreur.component";
import { HttpUsagesAvancesComponent } from "./angular-container/requetes-http-container/http-usages-avances/http-usages-avances.component";
import { HttpExempleComponent } from "./angular-container/requetes-http-container/http-exemple/http-exemple.component";
import { ModulesContainerComponent } from "./angular-container/modules-container/modules-container.component";
import { RootModuleComponent } from "./angular-container/modules-container/root-module/root-module.component";
import { FeatureModuleComponent } from "./angular-container/modules-container/feature-module/feature-module.component";
import { ModuleRoutingComponent } from "./angular-container/modules-container/module-routing/module-routing.component";
import { SharedModuleComponent } from "./angular-container/modules-container/shared-module/shared-module.component";
import { LazyLoadingComponent } from "./angular-container/modules-container/lazy-loading/lazy-loading.component";
import { JitAndAotComponent } from "./angular-container/modules-container/jit-and-aot/jit-and-aot.component";
import { TestsIntroductionComponent } from "./angular-container/tests-container/tests-introduction/tests-introduction.component";
import { TestsContainerComponent } from "./angular-container/tests-container/tests-container.component";
import { TestsSetupComponent } from "./angular-container/tests-container/tests-setup/tests-setup.component";
import { EnvironnementTesterComposantsComponent } from "./angular-container/tests-container/environnement-tester-composants/environnement-tester-composants.component";
import { TesterComposantsComponent } from "./angular-container/tests-container/tester-composants/tester-composants.component";
import { DetectionChangementsMatchersComponent } from "./angular-container/tests-container/detection-changements-matchers/detection-changements-matchers.component";
import { TesterComposantsAvecDependancesComponent } from "./angular-container/tests-container/tester-composants-avec-dependances/tester-composants-avec-dependances.component";
import { TestsIsolesPipesComponent } from "./angular-container/tests-container/tests-isoles-pipes/tests-isoles-pipes.component";
import { TestsExempleComponent } from "./angular-container/tests-container/tests-exemple/tests-exemple.component";
import { AnimationsContainerComponent } from "./angular-container/animations-container/animations-container.component";
import { AnimationsExempleComponent } from "./angular-container/animations-container/animations-exemple/animations-exemple.component";
import { AnimationsIntroductionComponent } from "./angular-container/animations-container/animations-introduction/animations-introduction.component";
import { FonctionsTriggerStateStyleComponent } from "./angular-container/animations-container/fonctions-trigger-state-style/fonctions-trigger-state-style.component";
import { FonctionsTransitionAnimateComponent } from "./angular-container/animations-container/fonctions-transition-animate/fonctions-transition-animate.component";
import { KeyframesGroupsComponent } from "./angular-container/animations-container/keyframes-groups/keyframes-groups.component";
import { CallbacksStartDoneComponent } from "./angular-container/animations-container/callbacks-start-done/callbacks-start-done.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch:'full' },
  { path: '**' , component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {anchorScrolling: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
