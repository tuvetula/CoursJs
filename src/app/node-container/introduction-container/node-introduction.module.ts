import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { NodeIntroductionContainerComponent } from './node-introduction-container.component';
import { JavascriptServeurClientComponent } from './javascript-serveur-client/javascript-serveur-client.component';
import { V8Component } from './v8/v8.component';
import { SynchroneAsynchroneComponent } from './synchrone-asynchrone/synchrone-asynchrone.component';
import { ServeurWebComponent } from './serveur-web/serveur-web.component';

@NgModule({
    declarations:[
        NodeIntroductionContainerComponent,
        JavascriptServeurClientComponent,
        V8Component,
        SynchroneAsynchroneComponent,
        ServeurWebComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        CodeFormatModule
    ]
})
export class NodeIntroductionModule {}