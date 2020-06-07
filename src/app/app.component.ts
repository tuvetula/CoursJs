import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ThemesService } from './shared/services/Themes/themes.service.ts.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(
    private themesService: ThemesService
  ) {}

  ngOnInit() {}
}
