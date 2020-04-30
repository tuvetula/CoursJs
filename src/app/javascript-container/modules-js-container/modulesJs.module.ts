import { NgModule } from "@angular/core";
import { ModulesJsContainerComponent } from './modules-js-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { ModuleJsIntroductionComponent } from './module-js-introduction/module-js-introduction.component';
import { ModuleJsImporterComponent } from './module-js-importer/module-js-importer.component';
import { ModuleJsExporterComponent } from './module-js-exporter/module-js-exporter.component';
import { ModuleJsReexporterComponent } from './module-js-reexporter/module-js-reexporter.component';

@NgModule({
    declarations: [ModulesJsContainerComponent, ModuleJsIntroductionComponent, ModuleJsImporterComponent, ModuleJsExporterComponent, ModuleJsReexporterComponent],
    imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule]
})

export class ModulesJsModule{}