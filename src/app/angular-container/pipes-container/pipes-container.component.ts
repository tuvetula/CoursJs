import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pipes-container",
  templateUrl: "./pipes-container.component.html",
  styleUrls: ["./pipes-container.component.css"],
})
export class PipesContainerComponent implements OnInit {
  public serviceName: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const url = this.activatedRoute.url.pipe(map((data) => data.join("")));
    url.subscribe((data) => (this.serviceName = data));
  }
}
