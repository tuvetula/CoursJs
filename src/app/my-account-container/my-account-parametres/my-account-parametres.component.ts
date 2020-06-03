import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemesService } from 'src/app/shared/services/Themes/themes.service.ts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-account-parametres',
  templateUrl: './my-account-parametres.component.html',
  styleUrls: ['./my-account-parametres.component.css']
})
export class MyAccountParametresComponent implements OnInit,OnDestroy {
  private nonActiveThemeNameSubscription: Subscription
  public nonActiveThemeName: string;

  constructor(
    private themesService: ThemesService
  ) { }

  ngOnInit(): void {
    this.nonActiveThemeNameSubscription = this.themesService.nonActiveThemeName.subscribe(
      name => this.nonActiveThemeName = name
    )
  }
  ngOnDestroy(): void {
    this.nonActiveThemeNameSubscription.unsubscribe();
  }

  public changeTheme(): void{
    this.themesService.changeTheme(this.nonActiveThemeName);
  }
}
