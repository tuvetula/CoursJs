import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemesModel } from '../../models/themes.model';

@Injectable()
export class ThemesService {
  private activeTheme: ThemesModel = {name: null , class: null};
  public nonActiveThemeName: BehaviorSubject<string> = new BehaviorSubject("Theme Light");
  private availableThemes: ThemesModel[] = [{name:"Theme Light" , class:"lightTheme"} , {name:"Theme Dark" , class:"darkTheme"}];

  constructor() {
    console.log(document.querySelector("body"));
      const themeLocalStorage = localStorage.getItem('Theme');
      if(themeLocalStorage){
        if(themeLocalStorage === "darkTheme"){
          this.setDarkTheme();
        }else{
          this.setLightTheme();
        }
      } else {
        this.setLightTheme();
      }
  }

  private setActiveTheme(newTheme: ThemesModel){
    const body = document.querySelector("body");
    if(body){
      //On modifie la classe de la balise body
      if(body.classList.contains(this.activeTheme.class)){
        body.classList.replace(this.activeTheme.class , newTheme.class);
      }else{
        body.classList.add(newTheme.class);
      }
      //On envoi le nom du theme non-actif au composant navbar pour modal account
      if(this.activeTheme.name){
        this.nonActiveThemeName.next(this.activeTheme.name);
      } else {
        if (newTheme.name === this.availableThemes[0].name){
          this.nonActiveThemeName.next(this.availableThemes[1].name);
        } else {
          this.nonActiveThemeName.next(this.availableThemes[0].name);
        }
    }
    //On enregistre le nouveau thème
      this.activeTheme = newTheme;
      localStorage.setItem('Theme' , newTheme.class);
    }
  }

  public getAvailableThemes(): ThemesModel[] {
    return this.availableThemes;
  }

  // public getActiveTheme(): string {
  //   return this.activeTheme;
  // }

  public setLightTheme(): void{
    this.setActiveTheme(this.availableThemes[0]);
  }

  public setDarkTheme(): void{
    this.setActiveTheme(this.availableThemes[1]);
  }

  public isDarkTheme(): boolean{
    return this.activeTheme.class === this.availableThemes[1].class;
  }

  public changeTheme(newThemeName: string): void{
    console.log('changeTheme: ' + newThemeName);
    
    this.getAvailableThemes().filter(
      (value) => value.name === newThemeName
    ).map(el => this.setActiveTheme(el));
  }

}
