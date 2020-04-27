import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JavascriptContainerComponent } from './javascript-container.component';
import { BasesModules } from './bases-container/bases.module';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { ListMenuLeftModule } from '../shared/modules/listMenuLeft.module';
import { TitlePageModule } from '../shared/modules/titlePage.module';
import { RouterModule } from '@angular/router';
import { ConditionsEtBouclesContainerComponent } from './conditions-et-boucles-container/conditions-et-boucles-container.component';
import { IfElseElseifComponent } from './conditions-et-boucles-container/if-else-elseif/if-else-elseif.component';
import { ConditionsEtBouclesModule } from './conditions-et-boucles-container/conditions-et-boucles.module';



@NgModule({
  declarations: [
    JavascriptContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ListMenuLeftModule,
    TitlePageModule,
    BasesModules,
    ConditionsEtBouclesModule,
    JavascriptRoutingModule
  ],
  providers: []
})
export class JavascriptModule { }
