import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { RoutingContainerComponent } from './routing-container.component';
import { GardeResolverComponent } from './garde-resolver/garde-resolver.component';
import { GardeCanDeactivateComponent } from './garde-can-deactivate/garde-can-deactivate.component';
import { GardeCanActivateComponent } from './garde-can-activate/garde-can-activate.component';
import { SeparerFichierRoutingComponent } from './separer-fichier-routing/separer-fichier-routing.component';
import { RedirectionWildcardComponent } from './redirection-wildcard/redirection-wildcard.component';
import { RoutesImbriqueesComponent } from './routes-imbriquees/routes-imbriquees.component';
import { QueryParamsFragmentComponent } from './query-params-fragment/query-params-fragment.component';
import { ParamsComponent } from './params/params.component';
import { ActivatedRouteRouterComponent } from './activated-route-router/activated-route-router.component';
import { RouterLinkActiveComponent } from './router-link-active/router-link-active.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { RoutingIntroductionComponent } from './routing-introduction/routing-introduction.component';


const routes: Route[] = [
  {
    path: "",
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
