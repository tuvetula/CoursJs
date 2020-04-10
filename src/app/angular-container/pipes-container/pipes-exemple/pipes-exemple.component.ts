import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-pipes-exemple",
  templateUrl: "./pipes-exemple.component.html",
  styleUrls: ["./pipes-exemple.component.css"],
})
export class PipesExempleComponent implements OnInit {
  public date: number = Date.now();
  public name: string = "jean";
  public cbNumber: string;
  public names: string[];
  public search: string;
  public information: Promise<string>;
  public counter: Observable<number>;
  public count: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.cbNumber = "1234 5678 5623 7618";
    this.names = [
      "Louis",
      "Louise",
      "Pierrot",
      "Rundee",
      "Lenny",
      "Roxane",
      "Romain",
    ];
    this.information = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("J'apparais au bout de 3 secondes grâce à un pipe asynchrone");
      }, 3000);
    });
    this.counter = new Observable((observer) => {
      setInterval(() => {
        observer.next(this.count++);
      }, 1000);
    });
  }
}
