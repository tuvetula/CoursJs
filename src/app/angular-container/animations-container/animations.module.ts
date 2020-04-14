import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AnimationsContainerComponent } from "./animations-container.component";
import { AnimationsIntroductionComponent } from "./animations-introduction/animations-introduction.component";
import { FonctionsTriggerStateStyleComponent } from "./fonctions-trigger-state-style/fonctions-trigger-state-style.component";
import { FonctionsTransitionAnimateComponent } from "./fonctions-transition-animate/fonctions-transition-animate.component";
import { KeyframesGroupsComponent } from "./keyframes-groups/keyframes-groups.component";
import { CallbacksStartDoneComponent } from "./callbacks-start-done/callbacks-start-done.component";
import { AnimationsExempleComponent } from "./animations-exemple/animations-exemple.component";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";

@NgModule({
  declarations: [
    AnimationsContainerComponent,
    AnimationsIntroductionComponent,
    FonctionsTriggerStateStyleComponent,
    FonctionsTransitionAnimateComponent,
    KeyframesGroupsComponent,
    CallbacksStartDoneComponent,
    AnimationsExempleComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
  providers: [],
})
export class AnimationsModule {}
