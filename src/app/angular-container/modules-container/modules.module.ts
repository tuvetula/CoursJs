import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesContainerComponent } from "./modules-container.component";
import { RootModuleComponent } from "./root-module/root-module.component";
import { FeatureModuleComponent } from "./feature-module/feature-module.component";
import { ModuleRoutingComponent } from "./module-routing/module-routing.component";
import { SharedModuleComponent } from "./shared-module/shared-module.component";
import { LazyLoadingComponent } from "./lazy-loading/lazy-loading.component";
import { JitAndAotComponent } from "./jit-and-aot/jit-and-aot.component";

@NgModule({
  declarations: [
    ModulesContainerComponent,
    RootModuleComponent,
    FeatureModuleComponent,
    ModuleRoutingComponent,
    SharedModuleComponent,
    LazyLoadingComponent,
    JitAndAotComponent,
  ],
  imports: [CommonModule, FormsModule, CodeFormatModule, ModulesRoutingModule],
  providers: [],
})
export class ModulesModule {}
