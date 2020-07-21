import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ComposantContainerComponent } from './composant-container.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DoubleDataBindingComponent } from './double-data-binding/double-data-binding.component';
import { PropertyInputComponent } from './property-input/property-input.component';
import { PropertyOutputComponent } from './property-output/property-output.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { VariableLocaleComponent } from './variable-locale/variable-locale.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { LifeCycleOfComponentsComponent } from './life-cycle-of-components/life-cycle-of-components.component';

const routes: Route[] = [
  {
    path: "",
    component: ComposantContainerComponent,
    children: [
        { path: "Interpolation", component: InterpolationComponent },
        { path: "Property-binding", component: PropertyBindingComponent },
        { path: "Event-binding", component: EventBindingComponent },
        {
          path: "Double-data-binding",
          component: DoubleDataBindingComponent,
        },
        { path: "Property-input", component: PropertyInputComponent },
        { path: "Property-output", component: PropertyOutputComponent },
        { path: "Encapsulation", component: EncapsulationComponent },
        { path: "Variable-locale", component: VariableLocaleComponent },
        { path: "ViewChild", component: ViewChildComponent },
        { path: "NgContent", component: NgContentComponent },
        { path: "ContentChild", component: ContentChildComponent },
        {
          path: "LifeCycle-of-components",
          component: LifeCycleOfComponentsComponent,
        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComposantRoutingModule {}
