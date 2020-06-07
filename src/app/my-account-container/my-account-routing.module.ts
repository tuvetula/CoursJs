import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MyAccountContainerComponent } from "./my-account-container.component";
import { AuthGuard } from "../shared/guard/auth.guard";
import { MyAccountProfilComponent } from "./my-account-profil/my-account-profil.component";
import { MyAccountParametresComponent } from "./my-account-parametres/my-account-parametres.component";

const routes: Route[] = [
  {
    path: "MonCompte",
    redirectTo: "MonCompte/Profil",
    pathMatch: "full"
  },
  {
    path: "MonCompte",
    component: MyAccountContainerComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: "Profil", component: MyAccountProfilComponent },
      { path: "Parametres", component: MyAccountParametresComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
