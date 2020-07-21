import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { FlexBoxComponent } from "./flex-box/flex-box.component";
import { StaticApiComponent } from "./static-api/static-api.component";
import { ResponsiveApiComponent } from "./responsive-api/responsive-api.component";
import { FeaturesComponent } from "./features/features.component";
import { FlexLayoutIntroductionComponent } from './flex-layout-introduction/flex-layout-introduction.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutContainerComponent } from './flex-layout-container.component';
import { FlexLayoutRoutingModule } from './flex-layout-routing.module';
@NgModule({
  declarations: [
    FlexLayoutContainerComponent,
    FlexBoxComponent,
    StaticApiComponent,
    ResponsiveApiComponent,
    FeaturesComponent,
    FlexLayoutIntroductionComponent,
  ],
  imports: [CommonModule, FormsModule, CodeFormatModule, FlexLayoutModule, FlexLayoutRoutingModule],
  providers: [],
})
export class FlexLayoutCoursModule {}
