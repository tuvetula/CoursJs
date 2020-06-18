import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "**", component: PageNotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
