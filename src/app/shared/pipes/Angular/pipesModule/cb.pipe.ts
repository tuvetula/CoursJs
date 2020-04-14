import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cb",
})
export class CbPipes implements PipeTransform {
  transform(value: string, n: number = 4) {
    let valueArray: string[] = value.split(" ");
    return (
      valueArray[0].slice(0,n) + Array(4 - n + 1).join('X')+
      " " +
      valueArray[1].replace(/[0-9]{4}/, "XXXX ") +
      valueArray[2].replace(/[0-9]{4}/, "XXXX ") +
      Array(4 - n + 1).join('X') + valueArray[3].slice(4-n)
    );
  }
}


