import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { FlexBoxComponent } from "./flex-box/flex-box.component";
import { StaticApiComponent } from "./static-api/static-api.component";
import { ResponsiveApiComponent } from "./responsive-api/responsive-api.component";
import { FeaturesComponent } from "./features/features.component";
import { FlexLayoutIntroductionComponent } from './flex-layout-introduction/flex-layout-introduction.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutContainerComponent } from './flex-layout-container.component';
@NgModule({
  declarations: [
    FlexLayoutContainerComponent,
    FlexBoxComponent,
    StaticApiComponent,
    ResponsiveApiComponent,
    FeaturesComponent,
    FlexLayoutIntroductionComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule, FlexLayoutModule],
  providers: [],
})
export class FlexLayoutCoursModule {}
