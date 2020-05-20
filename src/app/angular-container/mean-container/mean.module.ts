import { NgModule } from "@angular/core";
import { MeanContainerComponent } from './mean-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { MeanPresentationComponent } from './mean-presentation/mean-presentation.component';
import { MeanUtilisationNodeExpressComponent } from './mean-utilisation-node-express/mean-utilisation-node-express.component';
import { MeanInstallationMongodbComponent } from './mean-installation-mongodb/mean-installation-mongodb.component';
import { MeanInstallationAngularComponent } from './mean-installation-angular/mean-installation-angular.component';
import { MeanUtilisationAwsComponent } from './mean-utilisation-aws/mean-utilisation-aws.component';
import { MeanMiseProductionComponent } from './mean-mise-production/mean-mise-production.component';

@NgModule({
    declarations: [MeanContainerComponent, MeanPresentationComponent, MeanUtilisationNodeExpressComponent, MeanInstallationMongodbComponent, MeanInstallationAngularComponent, MeanUtilisationAwsComponent, MeanMiseProductionComponent],
    imports: [CommonModule, RouterModule, CodeFormatModule]
})
export class MeanModule{}