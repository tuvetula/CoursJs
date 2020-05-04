import { NgModule } from "@angular/core";
import { AsynchroneContainerComponent } from './asynchrone-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { AsynchroneIntroductionComponent } from './asynchrone-introduction/asynchrone-introduction.component';
import { AsynchronePromessesComponent } from './asynchrone-promesses/asynchrone-promesses.component';
import { AsynchroneChainerPromessesComponent } from './asynchrone-chainer-promesses/asynchrone-chainer-promesses.component';
import { AsynchroneMethodesDesPromessesComponent } from './asynchrone-methodes-des-promesses/asynchrone-methodes-des-promesses.component';
import { AsynchronePolyfillsWebpackComponent } from './asynchrone-polyfills-webpack/asynchrone-polyfills-webpack.component';
import { AsynchroneAsyncAwaitComponent } from './asynchrone-async-await/asynchrone-async-await.component';
import { AsynchroneEventloopComponent } from './asynchrone-eventloop/asynchrone-eventloop.component';

@NgModule({
    declarations: [
        AsynchroneContainerComponent,
        AsynchroneIntroductionComponent,
        AsynchronePromessesComponent,
        AsynchroneChainerPromessesComponent,
        AsynchroneMethodesDesPromessesComponent,
        AsynchronePolyfillsWebpackComponent,
        AsynchroneAsyncAwaitComponent,
        AsynchroneEventloopComponent
    ],
    imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule]
})
export class AsynchroneModule{}