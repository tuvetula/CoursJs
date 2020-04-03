import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-directive-container",
  templateUrl: "./directive-container.component.html",
  styleUrls: ["./directive-container.component.css"]
})
export class DirectiveContainerComponent implements OnInit {
  public serviceName: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const url: Observable<string> = this.activatedRoute.url.pipe(
      map(segments => segments.join(""))
    );
    url.subscribe(
      (data) => {
        this.serviceName = data;
      });
  }
}
