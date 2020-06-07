import { Injectable } from "@angular/core";

@Injectable()
export class StringFunctionsService {
  constructor() {}

  public capitalizeFirstLetter(data: string): string {
    if (typeof data !== "string") return "";
    return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  }
}
