import { Component, OnInit } from "@angular/core";
import { AppliService } from '../shared/services/Menus/appli.service';
import { ThemesService } from '../shared/services/Themes/themes.service.ts.service';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  public nameSection: string = "Accueil";

  constructor(
    private appliService: AppliService,
  ) {}

  ngOnInit(): void {
     //On paramètre la section en cours
     this.appliService.currentAppliMenu.next(this.nameSection);
  }
}
