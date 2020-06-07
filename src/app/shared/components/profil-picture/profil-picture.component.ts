import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { CurrentUserService } from "../../services/User/current-user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-profil-picture",
  templateUrl: "./profil-picture.component.html",
  styleUrls: ["./profil-picture.component.css"],
})
export class ProfilPictureComponent implements OnInit, OnDestroy {
  @Input() source: string;
  public classToApply: {};

  public profilPictureUrl: string;
  private profilLogo:string;

  private currentUserSubscription: Subscription;
  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.profilLogo = "../../../../../assets/Pictures/Logo/AccountBadge48.png";
    this.profilPictureUrl = this.profilLogo;
    this.currentUserSubscription = this.currentUserService.currentUser.subscribe(
      (currentUser) => {
        this.profilPictureUrl =
          currentUser && currentUser.user.profilPicture && currentUser.user.profilPicture.url
            ? currentUser.user.profilPicture.url
            : this.profilLogo;
      }
    );
    this.applyClass();
  }

  private applyClass() {
    if (this.source === "navbar") {
      this.classToApply = {
        navbarPicture: true,
        dropBtn: true,
      };
    } else if (this.source === "myAccount") {
      this.classToApply = {
        myAccount: true,
      };
    }
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
