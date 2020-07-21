import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { FlexLayoutContainerComponent } from './flex-layout-container.component';
import { FlexLayoutIntroductionComponent } from './flex-layout-introduction/flex-layout-introduction.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { StaticApiComponent } from './static-api/static-api.component';
import { ResponsiveApiComponent } from './responsive-api/responsive-api.component';
import { FeaturesComponent } from './features/features.component';


const routes: Route[] = [
  {
    path: "",
    component: FlexLayoutContainerComponent,
    children: [
        { path: "Introduction", component: FlexLayoutIntroductionComponent },
        { path: "FlexBox", component: FlexBoxComponent },
        { path: "StaticApi", component: StaticApiComponent },
        { path: "ResponsiveApi", component: ResponsiveApiComponent },
        { path: "Features", component: FeaturesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexLayoutRoutingModule {}
