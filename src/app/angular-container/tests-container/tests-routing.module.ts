import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { TestsContainerComponent } from './tests-container.component';
import { TestsIntroductionComponent } from './tests-introduction/tests-introduction.component';
import { TestsSetupComponent } from './tests-setup/tests-setup.component';
import { EnvironnementTesterComposantsComponent } from './environnement-tester-composants/environnement-tester-composants.component';
import { TesterComposantsComponent } from './tester-composants/tester-composants.component';
import { DetectionChangementsMatchersComponent } from './detection-changements-matchers/detection-changements-matchers.component';
import { TesterComposantsAvecDependancesComponent } from './tester-composants-avec-dependances/tester-composants-avec-dependances.component';
import { TestsIsolesPipesComponent } from './tests-isoles-pipes/tests-isoles-pipes.component';



const routes: Route[] = [
  {
    path: "",
    component: TestsContainerComponent,
    children: [
        { path: "Introduction", component: TestsIntroductionComponent },
          { path: "Setup", component: TestsSetupComponent },
          {
            path: "Environnement-tester-composants",
            component: EnvironnementTesterComposantsComponent,
          },
          { path: "Tester-composants", component: TesterComposantsComponent },
          {
            path: "Detection-changements-matchers",
            component: DetectionChangementsMatchersComponent,
          },
          {
            path: "Tester-composants-dependances",
            component: TesterComposantsAvecDependancesComponent,
          },
          { path: "Tests-isoles-pipes", component: TestsIsolesPipesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
