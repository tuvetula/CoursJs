import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdminContainerComponent } from "./admin-container.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminGuard } from "../shared/guard/admin.guard";

const routes: Route[] = [
  {
    path: "Admin",
    component: AdminContainerComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: "Utilisateurs",
        component: AdminUsersComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
