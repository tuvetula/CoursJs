import { Component, OnInit, ViewEncapsulation, HostListener } from "@angular/core";
import { ThemesService } from './shared/services/Themes/themes.service.ts.service';
import { DocumentClickService } from './shared/services/Utilities/document-click.service';
import { ScreenSizeService } from './shared/services/Utilities/screen-size.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.documentClickService.documentClickedTarget.next(event.target);
  }
  @HostListener('window:resize',['$event'])
  windowResize(event: { target: { innerWidth: number; }; }): void {
    this.screenSizeService.windowInnerWidth.next(event.target.innerWidth);
  }
  
  constructor(
    private themesService: ThemesService,
    private documentClickService: DocumentClickService,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit() {}
}
