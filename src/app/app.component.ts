import { Component, OnInit } from "@angular/core";
import { ThemesService } from './shared/services/Themes/themes.service.ts.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(
    private themesService: ThemesService
  ) {}

  ngOnInit() {}
}
