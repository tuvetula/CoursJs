import { NgModule } from '@angular/core';
import { RouterModule , Route } from '@angular/router';
import { MyAccountContainerComponent } from './my-account-container.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Route[] = [
    { path: "MonCompte" , component: MyAccountContainerComponent , canActivate:[AuthGuard] }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class MyAccountRoutingModule {}
  