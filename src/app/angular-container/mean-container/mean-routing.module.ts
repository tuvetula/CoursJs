import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MeanContainerComponent } from './mean-container.component';
import { MeanPresentationComponent } from './mean-presentation/mean-presentation.component';
import { MeanUtilisationNodeExpressComponent } from './mean-utilisation-node-express/mean-utilisation-node-express.component';
import { MeanInstallationMongodbComponent } from './mean-installation-mongodb/mean-installation-mongodb.component';
import { MeanInstallationAngularComponent } from './mean-installation-angular/mean-installation-angular.component';
import { MeanUtilisationAwsComponent } from './mean-utilisation-aws/mean-utilisation-aws.component';
import { MeanMiseProductionComponent } from './mean-mise-production/mean-mise-production.component';


const routes: Route[] = [
  {
    path: "",
    component: MeanContainerComponent,
    children: [
        { path: "Presentation", component: MeanPresentationComponent },
        {
          path: "Utilisation-node-express",
          component: MeanUtilisationNodeExpressComponent,
        },
        {
          path: "Installation-mongoDb-mongoose",
          component: MeanInstallationMongodbComponent,
        },
        {
          path: "Installation-Angular",
          component: MeanInstallationAngularComponent,
        },
        { path: "Utilisation-Aws", component: MeanUtilisationAwsComponent },
        {
          path: "Mise-en-production",
          component: MeanMiseProductionComponent,
        },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeanRoutingModule {}
