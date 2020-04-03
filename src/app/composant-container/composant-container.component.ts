import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-composant-container",
  templateUrl: "./composant-container.component.html",
  styleUrls: ["./composant-container.component.css"]
})
export class ComposantContainerComponent implements OnInit {
  public serviceName: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

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
