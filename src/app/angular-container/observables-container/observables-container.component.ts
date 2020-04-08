import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../shared/services/Angular/observable.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables-container',
  templateUrl: './observables-container.component.html',
  styleUrls: ['./observables-container.component.css']
})
export class ObservablesContainerComponent implements OnInit {
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
