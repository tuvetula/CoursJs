import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-container',
  templateUrl: './routing-container.component.html',
  styleUrls: ['./routing-container.component.css']
})
export class RoutingContainerComponent implements OnInit {
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
