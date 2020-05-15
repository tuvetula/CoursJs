import { NgModule } from "@angular/core";
import { CanvasContainerComponent } from './canvas-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { CanvasIntroductionComponent } from './canvas-introduction/canvas-introduction.component';
import { CanvasBasesComponent } from './canvas-bases/canvas-bases.component';
import { CanvasCerclesCourbesComponent } from './canvas-cercles-courbes/canvas-cercles-courbes.component';
import { CanvasMiseEnPratiqueRectanglesComponent } from './canvas-mise-en-pratique-rectangles/canvas-mise-en-pratique-rectangles.component';
import { CanvasDegradesComponent } from './canvas-degrades/canvas-degrades.component';
import { CanvasImagesEtMotifsComponent } from './canvas-images-et-motifs/canvas-images-et-motifs.component';
import { CanvasUtiliserTextesComponent } from './canvas-utiliser-textes/canvas-utiliser-textes.component';
import { CanvasTransformationsComponent } from './canvas-transformations/canvas-transformations.component';
import { CanvasOmbresOpacitesLimitesComponent } from './canvas-ombres-opacites-limites/canvas-ombres-opacites-limites.component';
import { CanvasPixelsComponent } from './canvas-pixels/canvas-pixels.component';
import { CanvasBasesAnimationsComponent } from './canvas-bases-animations/canvas-bases-animations.component';

@NgModule({
    declarations: [CanvasContainerComponent, CanvasIntroductionComponent, CanvasBasesComponent, CanvasCerclesCourbesComponent, CanvasMiseEnPratiqueRectanglesComponent, CanvasDegradesComponent, CanvasImagesEtMotifsComponent, CanvasUtiliserTextesComponent, CanvasTransformationsComponent, CanvasOmbresOpacitesLimitesComponent, CanvasPixelsComponent, CanvasBasesAnimationsComponent],
    imports: [CommonModule,RouterModule,CodeFormatModule]
})
export class CanvasModule {}