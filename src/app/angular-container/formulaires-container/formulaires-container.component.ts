import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-formulaires-container',
  templateUrl: './formulaires-container.component.html',
  styleUrls: ['./formulaires-container.component.css']
})
export class FormulairesContainerComponent implements OnInit {

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
