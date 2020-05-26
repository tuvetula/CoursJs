import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StringFunctions {
  constructor() {}

  public capitalizeFirstLetter(data: string): string {
    if (typeof data !== "string") return "";
    return data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  }
}
