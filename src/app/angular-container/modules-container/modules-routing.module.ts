import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ModulesContainerComponent } from './modules-container.component';
import { RootModuleComponent } from './root-module/root-module.component';
import { FeatureModuleComponent } from './feature-module/feature-module.component';
import { ModuleRoutingComponent } from './module-routing/module-routing.component';
import { SharedModuleComponent } from './shared-module/shared-module.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { JitAndAotComponent } from './jit-and-aot/jit-and-aot.component';

const routes: Route[] = [
  {
    path: "",
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
