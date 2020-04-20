import { Component, OnInit } from "@angular/core";
import { AppliService } from "../shared/services/appli.service";

@Component({
  selector: "app-javascript-container",
  templateUrl: "./javascript-container.component.html",
  styleUrls: ["./javascript-container.component.css"],
})
export class JavascriptContainerComponent implements OnInit {
  public nameSection: string = "Javascript";

  constructor(private appliService: AppliService) {}

  ngOnInit(): void {
    //On paramètre la section en cours
    this.appliService.currentAppliMenu.next(this.nameSection);
    //On paramètre le titre de la page
    this.appliService.title.next(this.nameSection);
  }
}
