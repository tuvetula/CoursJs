import { NgModule } from "@angular/core";
import { IfElseElseifComponent } from './if-else-elseif/if-else-elseif.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { TernairesComponent } from './ternaires/ternaires.component';
import { SwitchComponent } from './switch/switch.component';
import { BouclesForComponent } from './boucles-for/boucles-for.component';
import { BouclesWhileComponent } from './boucles-while/boucles-while.component';
import { ConditionsEtBouclesContainerComponent } from './conditions-et-boucles-container.component';

@NgModule({
    declarations:[
        ConditionsEtBouclesContainerComponent,
        IfElseElseifComponent,
        TernairesComponent,
        SwitchComponent,
        BouclesForComponent,
        BouclesWhileComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        CodeFormatModule
    ],
    providers:[]
})
export class ConditionsEtBouclesModule{}