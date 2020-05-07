import { NgModule } from "@angular/core";
import { LocationHistoryContainerComponent } from './location-history-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { LocationWebApiComponent } from './location-web-api/location-web-api.component';
import { LocationMethodesComponent } from './location-methodes/location-methodes.component';
import { LocationWebApiHistoryComponent } from './location-web-api-history/location-web-api-history.component';
import { LocationStateHistoryComponent } from './location-state-history/location-state-history.component';

@NgModule({
    declarations: [LocationHistoryContainerComponent, LocationWebApiComponent, LocationMethodesComponent, LocationWebApiHistoryComponent, LocationStateHistoryComponent],
    imports:[CommonModule,FormsModule,RouterModule,CodeFormatModule]
})
export class LocationHistoryModule{}