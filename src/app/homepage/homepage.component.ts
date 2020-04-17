import { Component, OnInit } from "@angular/core";
import { AppliService } from '../shared/services/appli.service';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  public nameSection: string = "Accueil";

  constructor(
    private appliService: AppliService) {}

  ngOnInit(): void {
     //On paramètre la section en cours
     this.appliService.currentSection.next(this.nameSection);
  }
}
