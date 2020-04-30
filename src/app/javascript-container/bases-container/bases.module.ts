import { NgModule } from "@angular/core";
import { VariablesVarComponent } from './variables-var/variables-var.component';
import { VariablesLetConstComponent } from './variables-let-const/variables-let-const.component';
import { HoistingComponent } from './hoisting/hoisting.component';
import { BasesTypesComponent } from './bases-types/bases-types.component';
import { BasesOperateursComponent } from './bases-operateurs/bases-operateurs.component';
import { BasesConversionsComponent } from './bases-conversions/bases-conversions.component';
import { BasesApprofondissementOperateursComponent } from './bases-approfondissement-operateurs/bases-approfondissement-operateurs.component';
import { BasesValeursReferencesComponent } from './bases-valeurs-references/bases-valeurs-references.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { BasesContainerComponent } from './bases-container.component';

@NgModule({
    declarations: [
        BasesContainerComponent,
        VariablesVarComponent,
        VariablesLetConstComponent,
        HoistingComponent,
        BasesTypesComponent,
        BasesOperateursComponent,
        BasesConversionsComponent,
        BasesApprofondissementOperateursComponent,
        BasesValeursReferencesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        CodeFormatModule
    ],
    providers:[]
})

export class BasesModule {}