import { NgModule } from "@angular/core";
import { ModuleExportRequireContainerComponent } from './module-export-require-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InterpreteurNodeComponent } from './interpreteur-node/interpreteur-node.component';
import { ModuleExportRequireComponent } from './module-export-require/module-export-require.component';
import { WrapperModuleComponent } from './wrapper-module/wrapper-module.component';
import { RequireAvanceComponent } from './require-avance/require-avance.component';
import { ImporterModulesNatifsComponent } from './importer-modules-natifs/importer-modules-natifs.component';

@NgModule({
    declarations: [
        ModuleExportRequireContainerComponent,
        InterpreteurNodeComponent,
        ModuleExportRequireComponent,
        WrapperModuleComponent,
        RequireAvanceComponent,
        ImporterModulesNatifsComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        CodeFormatModule,
        FlexLayoutModule
    ]
})
export class ModuleExportRequireModule {}