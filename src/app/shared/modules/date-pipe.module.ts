import { NgModule } from "@angular/core";
import { TimestampToDatePipe } from '../pipes/date/timestamp-to-date.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TimestampToDatePipe
    ],
    imports:[CommonModule],
    exports:[
        CommonModule,
        TimestampToDatePipe
    ]
})
export class DatePipeModule{}