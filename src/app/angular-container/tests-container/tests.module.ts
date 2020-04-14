import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TestsContainerComponent } from "./tests-container.component";
import { TestsIntroductionComponent } from "./tests-introduction/tests-introduction.component";
import { TestsSetupComponent } from "./tests-setup/tests-setup.component";
import { EnvironnementTesterComposantsComponent } from "./environnement-tester-composants/environnement-tester-composants.component";
import { TesterComposantsComponent } from "./tester-composants/tester-composants.component";
import { DetectionChangementsMatchersComponent } from "./detection-changements-matchers/detection-changements-matchers.component";
import { TesterComposantsAvecDependancesComponent } from "./tester-composants-avec-dependances/tester-composants-avec-dependances.component";
import { TestsIsolesPipesComponent } from "./tests-isoles-pipes/tests-isoles-pipes.component";
import { TestsExempleComponent } from "./tests-exemple/tests-exemple.component";
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
  declarations: [
    TestsContainerComponent,
    TestsIntroductionComponent,
    TestsSetupComponent,
    EnvironnementTesterComposantsComponent,
    TesterComposantsComponent,
    DetectionChangementsMatchersComponent,
    TesterComposantsAvecDependancesComponent,
    TestsIsolesPipesComponent,
    TestsExempleComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
  providers: [],
})
export class TestsModule {}
