import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { ComposantContainerComponent } from "./composant-container/composant-container.component";
import { EventBindingComponent } from "./composant-container/event-binding/event-binding.component";
import { DoubleDataBindingComponent } from "./composant-container/double-data-binding/double-data-binding.component";
import { InterpolationComponent } from "./composant-container/interpolation/interpolation.component";
import { DirectiveContainerComponent } from "./directive-container/directive-container.component";
import { NgIfComponent } from "./directive-container/ng-if/ng-if.component";
import { NgForComponent } from "./directive-container/ng-for/ng-for.component";
import { NgStyleComponent } from "./directive-container/ng-style/ng-style.component";
import { NgClassComponent } from "./directive-container/ng-class/ng-class.component";
import { PropertyBindingComponent } from "./composant-container/property-binding/property-binding.component";
import { PropertyInputComponent } from "./composant-container/property-input/property-input.component";
import { PropertyOutputComponent } from "./composant-container/property-output/property-output.component";
import { DirectivePersoComponent } from "./directive-container/directive-perso/directive-perso.component";
import { HostlistenerComponent } from "./directive-container/hostlistener/hostlistener.component";
import { HostbindingComponent } from "./directive-container/hostbinding/hostbinding.component";
import { LiaisonProprieteDirectiveComponent } from "./directive-container/liaison-propriete-directive/liaison-propriete-directive.component";
import { DirectiveStructurelleCreationComponent } from "./directive-container/directive-structurelle-creation/directive-structurelle-creation.component";
import { EncapsulationComponent } from "./composant-container/encapsulation/encapsulation.component";
import { ObservablesContainerComponent } from "./observables-container/observables-container.component";
import { ObservablesIntroductionComponent } from "./observables-container/observables-introduction/observables-introduction.component";
import { CreationObservableComponent } from "./observables-container/creation-observable/creation-observable.component";
import { IntroductionSubjectsComponent } from "./observables-container/introduction-subjects/introduction-subjects.component";
import { UtilisationSubjectsComponent } from "./observables-container/utilisation-subjects/utilisation-subjects.component";
import { OperateursPipesRxjsComponent } from "./observables-container/operateurs-pipes-rxjs/operateurs-pipes-rxjs.component";
import { ServicesDefinitionComponent } from "./services-container/services-definition/services-definition.component";
import { ServicesInjectionDefinitionComponent } from "./services-container/services-injection-definition/services-injection-definition.component";
import { ServicesHierarchieComponent } from "./services-container/services-hierarchie/services-hierarchie.component";
import { ServicesUtilisationComponent } from "./services-container/services-utilisation/services-utilisation.component";
import { ServicesContainerComponent } from "./services-container/services-container.component";
import { VariableLocaleComponent } from "./composant-container/variable-locale/variable-locale.component";
import { ViewChildComponent } from "./composant-container/view-child/view-child.component";
import { NgContentComponent } from "./composant-container/ng-content/ng-content.component";
import { ContentChildComponent } from "./composant-container/content-child/content-child.component";
import { LifeCycleOfComponentsComponent } from "./composant-container/life-cycle-of-components/life-cycle-of-components.component";
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

const routes: Routes = [
  {
    path: "Composants",
    component: ComposantContainerComponent,
    children: [
      { path: "Interpolation", component: InterpolationComponent },
      { path: "Property-binding", component: PropertyBindingComponent },
      { path: "Event-binding", component: EventBindingComponent },
      { path: "Double-data-binding", component: DoubleDataBindingComponent },
      { path: "Property-input", component: PropertyInputComponent },
      { path: "Property-output", component: PropertyOutputComponent },
      { path: "Encapsulation", component: EncapsulationComponent },
      { path: "Variable-locale", component: VariableLocaleComponent },
      { path: "ViewChild", component: ViewChildComponent },
      { path: "NgContent", component: NgContentComponent },
      { path: "ContentChild", component: ContentChildComponent },
      { path: "LifeCycle-of-components", component: LifeCycleOfComponentsComponent }
    ]
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
        component: LiaisonProprieteDirectiveComponent
      },
      {
        path: "Directive-Structurelle",
        component: DirectiveStructurelleCreationComponent
      }
    ]
  },
  {
    path: "Observable",
    component: ObservablesContainerComponent,
    children: [
      { path: "Introduction", component: ObservablesIntroductionComponent },
      { path: "Creation-observable", component: CreationObservableComponent },
      {
        path: "Introduction-subjects",
        component: IntroductionSubjectsComponent
      },
      { path: "Utilisation-subjects", component: UtilisationSubjectsComponent },
      { path: "Operateurs-pipes", component: OperateursPipesRxjsComponent }
    ]
  },
  {
    path: "Services",
    component: ServicesContainerComponent,
    children: [
      { path: "Definition-service", component: ServicesDefinitionComponent },
      {
        path: "Definition-injection-dependances",
        component: ServicesInjectionDefinitionComponent
      },
      {
        path: "Hierarchie",
        component: ServicesHierarchieComponent
      },
      { path: "Utilisation", component: ServicesUtilisationComponent }
    ]
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
        component: ActivatedRouteRouterComponent
      },
      { path: "Params", component: ParamsComponent },
      { path: "QueryParams-Fragment", component: QueryParamsFragmentComponent },
      { path: "Routes-imbriquees", component: RoutesImbriqueesComponent },
      { path: "Redirection-wildcard", component: RedirectionWildcardComponent },
      {
        path: "Separer-fichiers-routing",
        component: SeparerFichierRoutingComponent
      },
      { path: "CanActivate", component: GardeCanActivateComponent },
      { path: "CanDeactivate", component: GardeCanDeactivateComponent },
      { path: "Resolver", component: GardeResolverComponent }
    ]
  },
  { path: "", component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
