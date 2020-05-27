import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { AngularContainerComponent } from "./angular-container.component";
import { DirectiveContainerComponent } from "./directive-container/directive-container.component";
import { NgIfComponent } from "./directive-container/ng-if/ng-if.component";
import { NgForComponent } from "./directive-container/ng-for/ng-for.component";
import { NgStyleComponent } from "./directive-container/ng-style/ng-style.component";
import { NgClassComponent } from "./directive-container/ng-class/ng-class.component";
import { DirectivePersoComponent } from "./directive-container/directive-perso/directive-perso.component";
import { HostlistenerComponent } from "./directive-container/hostlistener/hostlistener.component";
import { HostbindingComponent } from "./directive-container/hostbinding/hostbinding.component";
import { LiaisonProprieteDirectiveComponent } from "./directive-container/liaison-propriete-directive/liaison-propriete-directive.component";
import { DirectiveStructurelleCreationComponent } from "./directive-container/directive-structurelle-creation/directive-structurelle-creation.component";
import { ObservablesContainerComponent } from "./observables-container/observables-container.component";
import { ObservablesIntroductionComponent } from "./observables-container/observables-introduction/observables-introduction.component";
import { CreationObservableComponent } from "./observables-container/creation-observable/creation-observable.component";
import { IntroductionSubjectsComponent } from "./observables-container/introduction-subjects/introduction-subjects.component";
import { UtilisationSubjectsComponent } from "./observables-container/utilisation-subjects/utilisation-subjects.component";
import { OperateursPipesRxjsComponent } from "./observables-container/operateurs-pipes-rxjs/operateurs-pipes-rxjs.component";
import { ServicesContainerComponent } from "./services-container/services-container.component";
import { ServicesDefinitionComponent } from "./services-container/services-definition/services-definition.component";
import { ServicesInjectionDefinitionComponent } from "./services-container/services-injection-definition/services-injection-definition.component";
import { ServicesHierarchieComponent } from "./services-container/services-hierarchie/services-hierarchie.component";
import { ServicesUtilisationComponent } from "./services-container/services-utilisation/services-utilisation.component";
import { RoutingContainerComponent } from "./routing-container/routing-container.component";
import { RoutingIntroductionComponent } from "./routing-container/routing-introduction/routing-introduction.component";
import { RouterLinkComponent } from "./routing-container/router-link/router-link.component";
import { RouterLinkActiveComponent } from "./routing-container/router-link-active/router-link-active.component";
import { ActivatedRouteRouterComponent } from "./routing-container/activated-route-router/activated-route-router.component";
import { ParamsComponent } from "./routing-container/params/params.component";
import { QueryParamsFragmentComponent } from "./routing-container/query-params-fragment/query-params-fragment.component";
import { RoutesImbriqueesComponent } from "./routing-container/routes-imbriquees/routes-imbriquees.component";
import { RedirectionWildcardComponent } from "./routing-container/redirection-wildcard/redirection-wildcard.component";
import { SeparerFichierRoutingComponent } from "./routing-container/separer-fichier-routing/separer-fichier-routing.component";
import { GardeCanActivateComponent } from "./routing-container/garde-can-activate/garde-can-activate.component";
import { GardeCanDeactivateComponent } from "./routing-container/garde-can-deactivate/garde-can-deactivate.component";
import { GardeResolverComponent } from "./routing-container/garde-resolver/garde-resolver.component";
import { FormulairesContainerComponent } from "./formulaires-container/formulaires-container.component";
import { IntroductionReactiveformComponent } from "./formulaires-container/introduction-reactiveform/introduction-reactiveform.component";
import { CreationFormulaireReactifComponent } from "./formulaires-container/creation-formulaire-reactif/creation-formulaire-reactif.component";
import { ApiFormcontrolFormgroupComponent } from "./formulaires-container/api-formcontrol-formgroup/api-formcontrol-formgroup.component";
import { ValueEtResetComponent } from "./formulaires-container/value-et-reset/value-et-reset.component";
import { ValidateursComponent } from "./formulaires-container/validateurs/validateurs.component";
import { MessageErreurComponent } from "./formulaires-container/message-erreur/message-erreur.component";
import { ClassesEtatsAbstractcontrolComponent } from "./formulaires-container/classes-etats-abstractcontrol/classes-etats-abstractcontrol.component";
import { FormgroupsImbriquesComponent } from "./formulaires-container/formgroups-imbriques/formgroups-imbriques.component";
import { FormarrayComponent } from "./formulaires-container/formarray/formarray.component";
import { FormbuilderComponent } from "./formulaires-container/formbuilder/formbuilder.component";
import { FormgroupEventemitterComponent } from "./formulaires-container/formgroup-eventemitter/formgroup-eventemitter.component";
import { FormulairesExempleComponent } from "./formulaires-container/formulaires-exemple/formulaires-exemple.component";
import { PipesContainerComponent } from "./pipes-container/pipes-container.component";
import { PipesIntroductionComponent } from "./pipes-container/pipes-introduction/pipes-introduction.component";
import { PipesUtilisationComponent } from "./pipes-container/pipes-utilisation/pipes-utilisation.component";
import { PipesPersonnaliseCreationComponent } from "./pipes-container/pipes-personnalise-creation/pipes-personnalise-creation.component";
import { PipesPursEtImpursComponent } from "./pipes-container/pipes-purs-et-impurs/pipes-purs-et-impurs.component";
import { PipesAsynchroneComponent } from "./pipes-container/pipes-asynchrone/pipes-asynchrone.component";
import { PipesExempleComponent } from "./pipes-container/pipes-exemple/pipes-exemple.component";
import { RequetesHttpContainerComponent } from "./requetes-http-container/requetes-http-container.component";
import { HttpIntroductionComponent } from "./requetes-http-container/http-introduction/http-introduction.component";
import { HttpUtilisationFirebaseComponent } from "./requetes-http-container/http-utilisation-firebase/http-utilisation-firebase.component";
import { HttpFaireRequetesComponent } from "./requetes-http-container/http-faire-requetes/http-faire-requetes.component";
import { HttpHeadersGestionErreurComponent } from "./requetes-http-container/http-headers-gestion-erreur/http-headers-gestion-erreur.component";
import { HttpUsagesAvancesComponent } from "./requetes-http-container/http-usages-avances/http-usages-avances.component";
import { HttpExempleComponent } from "./requetes-http-container/http-exemple/http-exemple.component";
import { ModulesContainerComponent } from "./modules-container/modules-container.component";
import { RootModuleComponent } from "./modules-container/root-module/root-module.component";
import { FeatureModuleComponent } from "./modules-container/feature-module/feature-module.component";
import { ModuleRoutingComponent } from "./modules-container/module-routing/module-routing.component";
import { SharedModuleComponent } from "./modules-container/shared-module/shared-module.component";
import { LazyLoadingComponent } from "./modules-container/lazy-loading/lazy-loading.component";
import { JitAndAotComponent } from "./modules-container/jit-and-aot/jit-and-aot.component";
import { AnimationsContainerComponent } from "./animations-container/animations-container.component";
import { AnimationsIntroductionComponent } from "./animations-container/animations-introduction/animations-introduction.component";
import { FonctionsTriggerStateStyleComponent } from "./animations-container/fonctions-trigger-state-style/fonctions-trigger-state-style.component";
import { FonctionsTransitionAnimateComponent } from "./animations-container/fonctions-transition-animate/fonctions-transition-animate.component";
import { KeyframesGroupsComponent } from "./animations-container/keyframes-groups/keyframes-groups.component";
import { CallbacksStartDoneComponent } from "./animations-container/callbacks-start-done/callbacks-start-done.component";
import { AnimationsExempleComponent } from "./animations-container/animations-exemple/animations-exemple.component";
import { TestsContainerComponent } from "./tests-container/tests-container.component";
import { TestsIntroductionComponent } from "./tests-container/tests-introduction/tests-introduction.component";
import { TestsSetupComponent } from "./tests-container/tests-setup/tests-setup.component";
import { EnvironnementTesterComposantsComponent } from "./tests-container/environnement-tester-composants/environnement-tester-composants.component";
import { TesterComposantsComponent } from "./tests-container/tester-composants/tester-composants.component";
import { DetectionChangementsMatchersComponent } from "./tests-container/detection-changements-matchers/detection-changements-matchers.component";
import { TesterComposantsAvecDependancesComponent } from "./tests-container/tester-composants-avec-dependances/tester-composants-avec-dependances.component";
import { TestsIsolesPipesComponent } from "./tests-container/tests-isoles-pipes/tests-isoles-pipes.component";
import { ComposantContainerComponent } from "./composant-container/composant-container.component";
import { InterpolationComponent } from "./composant-container/interpolation/interpolation.component";
import { PropertyBindingComponent } from "./composant-container/property-binding/property-binding.component";
import { EventBindingComponent } from "./composant-container/event-binding/event-binding.component";
import { DoubleDataBindingComponent } from "./composant-container/double-data-binding/double-data-binding.component";
import { PropertyInputComponent } from "./composant-container/property-input/property-input.component";
import { PropertyOutputComponent } from "./composant-container/property-output/property-output.component";
import { EncapsulationComponent } from "./composant-container/encapsulation/encapsulation.component";
import { VariableLocaleComponent } from "./composant-container/variable-locale/variable-locale.component";
import { ViewChildComponent } from "./composant-container/view-child/view-child.component";
import { NgContentComponent } from "./composant-container/ng-content/ng-content.component";
import { ContentChildComponent } from "./composant-container/content-child/content-child.component";
import { LifeCycleOfComponentsComponent } from "./composant-container/life-cycle-of-components/life-cycle-of-components.component";
import { FlexLayoutContainerComponent } from './flex-layout-container/flex-layout-container.component';
import { FlexLayoutIntroductionComponent } from './flex-layout-container/flex-layout-introduction/flex-layout-introduction.component';
import { FlexBoxComponent } from './flex-layout-container/flex-box/flex-box.component';
import { StaticApiComponent } from './flex-layout-container/static-api/static-api.component';
import { ResponsiveApiComponent } from './flex-layout-container/responsive-api/responsive-api.component';
import { FeaturesComponent } from './flex-layout-container/features/features.component';
import { OperateursCreationComponent } from './observables-container/operateurs-creation/operateurs-creation.component';
import { OperateursPipeablesComponent } from './observables-container/operateurs-pipeables/operateurs-pipeables.component';
import { CreationFonctionFluxComponent } from './observables-container/creation-fonction-flux/creation-fonction-flux.component';
import { OperateursCombinaisonComponent } from './observables-container/operateurs-combinaison/operateurs-combinaison.component';
import { OperateursFiltresComponent } from './observables-container/operateurs-filtres/operateurs-filtres.component';
import { MeanContainerComponent } from './mean-container/mean-container.component';
import { MeanPresentationComponent } from './mean-container/mean-presentation/mean-presentation.component';
import { MeanUtilisationNodeExpressComponent } from './mean-container/mean-utilisation-node-express/mean-utilisation-node-express.component';
import { MeanInstallationMongodbComponent } from './mean-container/mean-installation-mongodb/mean-installation-mongodb.component';
import { MeanInstallationAngularComponent } from './mean-container/mean-installation-angular/mean-installation-angular.component';
import { MeanUtilisationAwsComponent } from './mean-container/mean-utilisation-aws/mean-utilisation-aws.component';
import { MeanMiseProductionComponent } from './mean-container/mean-mise-production/mean-mise-production.component';
import { AuthentificationJwtContainerComponent } from './authentification-jwt-container/authentification-jwt-container.component';
import { AuthentificationJwtObjectifsComponent } from './authentification-jwt-container/authentification-jwt-objectifs/authentification-jwt-objectifs.component';
import { AuthentificationJwtPreparationApplicationComponent } from './authentification-jwt-container/authentification-jwt-preparation-application/authentification-jwt-preparation-application.component';
import { AuthentificationJwtTopbarRoutingComponent } from './authentification-jwt-container/authentification-jwt-topbar-routing/authentification-jwt-topbar-routing.component';
import { AuthentificationJwtSigninSignupComponent } from './authentification-jwt-container/authentification-jwt-signin-signup/authentification-jwt-signin-signup.component';
import { AuthentificationJwtServiceAuthComponent } from './authentification-jwt-container/authentification-jwt-service-auth/authentification-jwt-service-auth.component';
import { AuthentificationJwtMethodeSigninComponent } from './authentification-jwt-container/authentification-jwt-methode-signin/authentification-jwt-methode-signin.component';
import { AuthentificationJwtCreationRouteExpressComponent } from './authentification-jwt-container/authentification-jwt-creation-route-express/authentification-jwt-creation-route-express.component';
import { AuthentificationJwtCreationTokenComponent } from './authentification-jwt-container/authentification-jwt-creation-token/authentification-jwt-creation-token.component';
import { AuthentificationJwtDeconnexionUtilisateurComponent } from './authentification-jwt-container/authentification-jwt-deconnexion-utilisateur/authentification-jwt-deconnexion-utilisateur.component';
import { AuthentificationJwtCreationPageProfilComponent } from './authentification-jwt-container/authentification-jwt-creation-page-profil/authentification-jwt-creation-page-profil.component';
import { AuthentificationJwtDetailsProfilComponent } from './authentification-jwt-container/authentification-jwt-details-profil/authentification-jwt-details-profil.component';
import { AuthentificationJwtCreationIntercepteurComponent } from './authentification-jwt-container/authentification-jwt-creation-intercepteur/authentification-jwt-creation-intercepteur.component';
import { AuthentificationJwtGestionExpirationTokenComponent } from './authentification-jwt-container/authentification-jwt-gestion-expiration-token/authentification-jwt-gestion-expiration-token.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Route[] = [
  {
    path: "Angular",
    component: AngularContainerComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    children: [
      {
        path: "Composants",
        component: ComposantContainerComponent,
        children: [
          { path: "Interpolation", component: InterpolationComponent },
          { path: "Property-binding", component: PropertyBindingComponent },
          { path: "Event-binding", component: EventBindingComponent },
          {
            path: "Double-data-binding",
            component: DoubleDataBindingComponent,
          },
          { path: "Property-input", component: PropertyInputComponent },
          { path: "Property-output", component: PropertyOutputComponent },
          { path: "Encapsulation", component: EncapsulationComponent },
          { path: "Variable-locale", component: VariableLocaleComponent },
          { path: "ViewChild", component: ViewChildComponent },
          { path: "NgContent", component: NgContentComponent },
          { path: "ContentChild", component: ContentChildComponent },
          {
            path: "LifeCycle-of-components",
            component: LifeCycleOfComponentsComponent,
          },
        ],
      },
      {
        path: "Directives",
        component: DirectiveContainerComponent,
        children: [
          { path: "ngIf", component: NgIfComponent },
          { path: "ngFor", component: NgForComponent },
          { path: "ngStyle", component: NgStyleComponent },
          { path: "ngClass", component: NgClassComponent },
          { path: "Directive-attribut", component: DirectivePersoComponent },
          { path: "HostListener", component: HostlistenerComponent },
          { path: "HostBinding", component: HostbindingComponent },
          {
            path: "Liaison-proprietes-directive",
            component: LiaisonProprieteDirectiveComponent,
          },
          {
            path: "Directive-Structurelle",
            component: DirectiveStructurelleCreationComponent,
          },
        ],
      },
      {
        path: "Observables",
        component: ObservablesContainerComponent,
        children: [
          { path: "Introduction", component: ObservablesIntroductionComponent },
          {
            path: "Creation-observable",
            component: CreationObservableComponent,
          },
          {
            path: "Introduction-subjects",
            component: IntroductionSubjectsComponent,
          },
          {
            path: "Utilisation-subjects",
            component: UtilisationSubjectsComponent,
          },
          { path: "Operateurs-pipes", component: OperateursPipesRxjsComponent },
          { path: "Operateurs-creation", component: OperateursCreationComponent },
          { path: "Operateurs-pipeables", component: OperateursPipeablesComponent },
          { path: "Creation-fonction-generation-flux", component: CreationFonctionFluxComponent },
          { path: "Operateurs-combinaison", component: OperateursCombinaisonComponent },
          { path: "Operateurs-filtre", component: OperateursFiltresComponent },
        ],
      },
      {
        path: "Mean" , component: MeanContainerComponent , children: [
          { path: "Presentation" , component: MeanPresentationComponent },
          { path: "Utilisation-node-express" , component: MeanUtilisationNodeExpressComponent },
          { path: "Installation-mongoDb-mongoose" , component: MeanInstallationMongodbComponent },
          { path: "Installation-Angular" , component: MeanInstallationAngularComponent },
          { path: "Utilisation-Aws" , component: MeanUtilisationAwsComponent },
          { path: "Mise-en-production" , component: MeanMiseProductionComponent },
        ]
      },
      {
        path: "AuthentificationJwt" , component: AuthentificationJwtContainerComponent , children: [
          { path: "Objectifs" , component: AuthentificationJwtObjectifsComponent },
          { path: "Preparation-application" , component: AuthentificationJwtPreparationApplicationComponent },
          { path: "Topbar-routing" , component: AuthentificationJwtTopbarRoutingComponent },
          { path: "Signin-signup" , component: AuthentificationJwtSigninSignupComponent },
          { path: "Service" , component: AuthentificationJwtServiceAuthComponent },
          { path: "Methode-signin" , component: AuthentificationJwtMethodeSigninComponent },
          { path: "Creation-route-express" , component: AuthentificationJwtCreationRouteExpressComponent },
          { path: "Creation-token-express" , component: AuthentificationJwtCreationTokenComponent },
          { path: "Deconnexion" , component: AuthentificationJwtDeconnexionUtilisateurComponent },
          { path: "Creation-page-profil" , component: AuthentificationJwtCreationPageProfilComponent },
          { path: "Details-profil" , component: AuthentificationJwtDetailsProfilComponent },
          { path: "Creation-intercepteur" , component: AuthentificationJwtCreationIntercepteurComponent },
          { path: "Gestion-expiration-token" , component: AuthentificationJwtGestionExpirationTokenComponent },
        ]
      },
      {
        path: "Services",
        component: ServicesContainerComponent,
        children: [
          {
            path: "Definition-service",
            component: ServicesDefinitionComponent,
          },
          {
            path: "Definition-injection-dependances",
            component: ServicesInjectionDefinitionComponent,
          },
          {
            path: "Hierarchie",
            component: ServicesHierarchieComponent,
          },
          { path: "Utilisation", component: ServicesUtilisationComponent },
        ],
      },
      {
        path: "Routing",
        component: RoutingContainerComponent,
        children: [
          { path: "Introduction", component: RoutingIntroductionComponent },
          { path: "RouterLink", component: RouterLinkComponent },
          { path: "RouterLinkActive", component: RouterLinkActiveComponent },
          {
            path: "ActivatedRoute-Router",
            component: ActivatedRouteRouterComponent,
          },
          { path: "Params", component: ParamsComponent },
          {
            path: "QueryParams-Fragment",
            component: QueryParamsFragmentComponent,
          },
          { path: "Routes-imbriquees", component: RoutesImbriqueesComponent },
          {
            path: "Redirection-wildcard",
            component: RedirectionWildcardComponent,
          },
          {
            path: "Separer-fichiers-routing",
            component: SeparerFichierRoutingComponent,
          },
          { path: "CanActivate", component: GardeCanActivateComponent },
          { path: "CanDeactivate", component: GardeCanDeactivateComponent },
          { path: "Resolver", component: GardeResolverComponent },
        ],
      },
      {
        path: "Formulaires",
        component: FormulairesContainerComponent,
        children: [
          {
            path: "Introduction-ReactiveForm",
            component: IntroductionReactiveformComponent,
          },
          {
            path: "Creation-formulaire-reactif",
            component: CreationFormulaireReactifComponent,
          },
          {
            path: "Api-formControl-formGroup",
            component: ApiFormcontrolFormgroupComponent,
          },
          { path: "Value-Reset", component: ValueEtResetComponent },
          { path: "Validateurs", component: ValidateursComponent },
          { path: "Messages-erreur", component: MessageErreurComponent },
          {
            path: "Classes-etats-abstractControls",
            component: ClassesEtatsAbstractcontrolComponent,
          },
          {
            path: "FormGroups-imbriques",
            component: FormgroupsImbriquesComponent,
          },
          { path: "FormArray", component: FormarrayComponent },
          { path: "FormBuilder", component: FormbuilderComponent },
          {
            path: "FormGroup-eventEmitter",
            component: FormgroupEventemitterComponent,
          },
          { path: "Exemple", component: FormulairesExempleComponent },
        ],
      },
      {
        path: "Pipes",
        component: PipesContainerComponent,
        children: [
          { path: "Introduction", component: PipesIntroductionComponent },
          { path: "Utilisation", component: PipesUtilisationComponent },
          {
            path: "Creer-pipe-personnalise",
            component: PipesPersonnaliseCreationComponent,
          },
          { path: "Pipes-purs-impurs", component: PipesPursEtImpursComponent },
          { path: "Pipe-asynchrone", component: PipesAsynchroneComponent },
          { path: "Exemple", component: PipesExempleComponent },
        ],
      },
      {
        path: "RequetesHttp",
        component: RequetesHttpContainerComponent,
        children: [
          { path: "Introduction", component: HttpIntroductionComponent },
          {
            path: "Utilisation-firebase",
            component: HttpUtilisationFirebaseComponent,
          },
          {
            path: "Faire-requetes-http",
            component: HttpFaireRequetesComponent,
          },
          {
            path: "Headers-gestion-erreur",
            component: HttpHeadersGestionErreurComponent,
          },
          { path: "Usage-avances", component: HttpUsagesAvancesComponent },
          { path: "Exemple", component: HttpExempleComponent },
        ],
      },
      {
        path: "Modules",
        component: ModulesContainerComponent,
        children: [
          { path: "Root-module", component: RootModuleComponent },
          { path: "Feature-module", component: FeatureModuleComponent },
          { path: "Module-routing", component: ModuleRoutingComponent },
          { path: "Shared-module", component: SharedModuleComponent },
          { path: "Lazy-loading", component: LazyLoadingComponent },
          { path: "Jit-aot", component: JitAndAotComponent },
        ],
      },
      {
        path: "Animations",
        component: AnimationsContainerComponent,
        children: [
          { path: "Introduction", component: AnimationsIntroductionComponent },
          {
            path: "Fonctions-trigger-state-style",
            component: FonctionsTriggerStateStyleComponent,
          },
          {
            path: "Fonctions-transition-animate",
            component: FonctionsTransitionAnimateComponent,
          },
          { path: "Keyframes-groups", component: KeyframesGroupsComponent },
          {
            path: "Callbacks-start-done",
            component: CallbacksStartDoneComponent,
          },
          { path: "Exemple", component: AnimationsExempleComponent },
        ],
      },
      {
        path: "Tests",
        component: TestsContainerComponent,
        children: [
          { path: "Introduction", component: TestsIntroductionComponent },
          { path: "Setup", component: TestsSetupComponent },
          {
            path: "Environnement-tester-composants",
            component: EnvironnementTesterComposantsComponent,
          },
          { path: "Tester-composants", component: TesterComposantsComponent },
          {
            path: "Detection-changements-matchers",
            component: DetectionChangementsMatchersComponent,
          },
          {
            path: "Tester-composants-dependances",
            component: TesterComposantsAvecDependancesComponent,
          },
          { path: "Tests-isoles-pipes", component: TestsIsolesPipesComponent },
        ],
      },
      {
        path: "FlexLayout",
        component: FlexLayoutContainerComponent,
        children: [
          {path: "Introduction" , component: FlexLayoutIntroductionComponent},
          {path: "FlexBox" , component: FlexBoxComponent},
          {path: "StaticApi" , component: StaticApiComponent},
          {path: "ResponsiveApi" , component: ResponsiveApiComponent},
          {path: "Features" , component: FeaturesComponent},
        ]
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
