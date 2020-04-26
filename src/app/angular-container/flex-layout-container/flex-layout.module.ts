import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CodeFormatModule } from "src/app/shared/modules/codeFormat.module";
import { FlexBoxComponent } from "./flex-box/flex-box.component";
import { StaticApiComponent } from "./static-api/static-api.component";
import { ResponsiveApiComponent } from "./responsive-api/responsive-api.component";
import { FeaturesComponent } from "./features/features.component";
import { FlexLayoutExempleComponent } from "./flex-layout-exemple/flex-layout-exemple.component";
import { FlexLayoutIntroductionComponent } from './flex-layout-introduction/flex-layout-introduction.component';

@NgModule({
  declarations: [
    FlexBoxComponent,
    StaticApiComponent,
    ResponsiveApiComponent,
    FeaturesComponent,
    FlexLayoutExempleComponent,
    FlexLayoutIntroductionComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, CodeFormatModule],
  providers: [],
})
export class FlexLayoutModule {}
