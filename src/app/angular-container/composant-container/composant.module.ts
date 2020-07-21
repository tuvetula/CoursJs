import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComposantRoutingModule } from './composant-routing.module';
import { ComposantContainerComponent } from './composant-container.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { DoubleDataBindingComponent } from './double-data-binding/double-data-binding.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LifeCycleOfComponentsComponent } from './life-cycle-of-components/life-cycle-of-components.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgContentChildrenComponent } from './ng-content/ng-content-children/ng-content-children.component';
import { NouveauComponent } from './nouveau/nouveau.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PropertyInputComponent } from './property-input/property-input.component';
import { PropertyOutputComponent } from './property-output/property-output.component';
import { PropertyInputChildComponent } from './property-input/property-input-child/property-input-child.component';
import { PropertyOutputChildComponent } from './property-output/property-output-child/property-output-child.component';
import { VariableLocaleComponent } from './variable-locale/variable-locale.component';
import { VariableLocaleChildrenComponent } from './variable-locale/variable-locale-children/variable-locale-children.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildChildrenComponent } from './view-child/view-child-children/view-child-children.component';
import { FruitItemsComponent } from './property-output/fruit-items/fruit-items.component';

@NgModule({
    declarations: [
        ComposantContainerComponent,
        ContentChildComponent,
        DoubleDataBindingComponent,
        EncapsulationComponent,
        EventBindingComponent,
        InterpolationComponent,
        LifeCycleOfComponentsComponent,
        NgContentComponent,
        NgContentChildrenComponent,
        NouveauComponent,
        PropertyBindingComponent,
        PropertyInputComponent,
        PropertyOutputComponent,
        PropertyInputChildComponent,
        PropertyOutputChildComponent,
        VariableLocaleComponent,
        VariableLocaleChildrenComponent,
        ViewChildComponent,
        ViewChildChildrenComponent,
        FruitItemsComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        CodeFormatModule,
        FlexLayoutModule,
        ComposantRoutingModule
    ],
    providers: [],
    exports: []
})
export class ComposantModule { }