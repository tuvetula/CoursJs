import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RoutingContainerComponent } from "./routing-container.component";
import { RoutingIntroductionComponent } from "./routing-introduction/routing-introduction.component";
import { RouterLinkComponent } from "./router-link/router-link.component";
import { RouterLinkActiveComponent } from "./router-link-active/router-link-active.component";
import { ParamsComponent } from "./params/params.component";
import { QueryParamsFragmentComponent } from "./query-params-fragment/query-params-fragment.component";
import { RoutesImbriqueesComponent } from "./routes-imbriquees/routes-imbriquees.component";
import { RedirectionWildcardComponent } from "./redirection-wildcard/redirection-wildcard.component";
import { SeparerFichierRoutingComponent } from "./separer-fichier-routing/separer-fichier-routing.component";
import { GardeCanActivateComponent } from "./garde-can-activate/garde-can-activate.component";
import { GardeCanDeactivateComponent } from "./garde-can-deactivate/garde-can-deactivate.component";
import { GardeResolverComponent } from "./garde-resolver/garde-resolver.component";
import { ActivatedRouteRouterComponent } from "./activated-route-router/activated-route-router.component";
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
  declarations: [
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
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
  providers: [],
})
export class RoutingModule {}
