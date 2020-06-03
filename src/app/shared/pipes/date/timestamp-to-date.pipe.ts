import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number): unknown {
    const date = new Date(value).toLocaleDateString();
    return date;
  }

}
