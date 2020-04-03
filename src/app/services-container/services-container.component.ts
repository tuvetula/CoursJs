import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-services-container',
  templateUrl: './services-container.component.html',
  styleUrls: ['./services-container.component.css']
})
export class ServicesContainerComponent implements OnInit {
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
