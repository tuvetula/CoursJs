import { NgModule } from "@angular/core";
import { DateContainerComponent } from './date-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { DateDeclarationComponent } from './date-declaration/date-declaration.component';
import { DateFormatComponent } from './date-format/date-format.component';
import { DateTimestampsComponent } from './date-timestamps/date-timestamps.component';
import { DateApiComponent } from './date-api/date-api.component';
import { DateAffichageComponent } from './date-affichage/date-affichage.component';

@NgModule({
    declarations:[DateContainerComponent, DateDeclarationComponent, DateFormatComponent, DateTimestampsComponent, DateApiComponent, DateAffichageComponent],
    imports: [CommonModule,RouterModule,FormsModule,CodeFormatModule]
})
export class DateModule{}