import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-requetes-http-container",
  templateUrl: "./requetes-http-container.component.html",
  styleUrls: ["./requetes-http-container.component.css"],
})
export class RequetesHttpContainerComponent implements OnInit {
  public serviceName: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const url = this.activatedRoute.url.pipe(map((data) => data.join("")));
    url.subscribe((data) => (this.serviceName = data));
  }
}
