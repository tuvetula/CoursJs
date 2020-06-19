import { NgModule } from "@angular/core";
import { NpmContainerComponent } from './npm-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroductionNpmComponent } from './introduction-npm/introduction-npm.component';
import { UtilisationNpmComponent } from './utilisation-npm/utilisation-npm.component';

@NgModule({
    declarations: [
        NpmContainerComponent,
        IntroductionNpmComponent,
        UtilisationNpmComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        CodeFormatModule,
        FlexLayoutModule
    ]
})
export class NpmModule {}