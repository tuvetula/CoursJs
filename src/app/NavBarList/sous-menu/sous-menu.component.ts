import { Component, OnInit, Input } from "@angular/core";
import { SousMenuService } from "src/app/shared/services/sous-menu.service";

@Component({
  selector: "app-sous-menu",
  templateUrl: "./sous-menu.component.html",
  styleUrls: ["./sous-menu.component.css"],
})
export class SousMenuComponent implements OnInit {
  @Input() public menu: { name: string; url: string }[];

  constructor(private sousMenuService: SousMenuService) {}

  ngOnInit(): void {
    //Suppression prefix url pour bonne navigation avec routerLink
    this.menu.forEach((element) => {
      element.url = element.url.slice(element.url.lastIndexOf('/')+1)
    });
  }

  onClick(event: { target: { pathname: string; }; }): void {
    this.sousMenuService.menuClickPathname.next(event.target.pathname);
  }
}
