import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectiveContainerComponent } from "./directive-container.component";
import { DirectivePersoComponent } from "./directive-perso/directive-perso.component";
import { DirectiveStructurelleCreationComponent } from "./directive-structurelle-creation/directive-structurelle-creation.component";
import { HostlistenerComponent } from "./hostlistener/hostlistener.component";
import { HostbindingComponent } from "./hostbinding/hostbinding.component";
import { LiaisonProprieteDirectiveComponent } from "./liaison-propriete-directive/liaison-propriete-directive.component";
import { NgIfComponent } from "./ng-if/ng-if.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { FormsModule } from "@angular/forms";
import { SurlignerDirective } from "src/app/shared/directives/Angular/directiveModule/surlignage.directive";
import { SurlignerHostListenerDirective } from "src/app/shared/directives/Angular/directiveModule/surlignageHostListener.directive";
import { SurlignerHostBindingDirective } from "src/app/shared/directives/Angular/directiveModule/surlignageHostBinding.directive";
import { SurlignerLiaisonDirective } from "src/app/shared/directives/Angular/directiveModule/surlignageLiaison.directive";
import { SurlignerLiaison1Directive } from "src/app/shared/directives/Angular/directiveModule/surlignageLiaison1.directive";
import { NgIfCustomDirective } from "src/app/shared/directives/Angular/directiveModule/ngIfCustom.directive";
import { IfRoleDirective } from "src/app/shared/directives/Angular/directiveModule/ifRole.directive";
import { AuthDirectiveService } from "src/app/shared/services/Angular/auth-directive.service";
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';

@NgModule({
  declarations: [
    DirectiveContainerComponent,
    DirectivePersoComponent,
    DirectiveStructurelleCreationComponent,
    HostlistenerComponent,
    HostbindingComponent,
    LiaisonProprieteDirectiveComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    SurlignerDirective,
    SurlignerHostListenerDirective,
    SurlignerHostBindingDirective,
    SurlignerLiaisonDirective,
    SurlignerLiaison1Directive,
    NgIfCustomDirective,
    IfRoleDirective,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
  providers: [AuthDirectiveService],
})
export class DirectiveModule {}
