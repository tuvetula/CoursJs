import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppliService } from "../../services/Menus/appli.service";
import { filter } from "rxjs/operators";
import { AppliMenuModel } from "../../models/Menus/appliMenu.model";
import { Subscription } from "rxjs";
import { DocumentClickService } from "../../services/Utilities/document-click.service";
import { StringFunctionsService } from "../../services/Utilities/String/string-functions.service";
import { SearchResultsModel } from "../../models/search-bar/search-results";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
  providers: [StringFunctionsService],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public source: string = "searchBar";

  private documentClickSubscription: Subscription;

  //Utile pour le click en dehors de la searchBar
  @ViewChild("searchResultPopup", { read: ElementRef, static: false })
  searchResultPopup: ElementRef;
  @ViewChild("searchBarFormElement", { read: ElementRef, static: false })
  searchBarFormElement: ElementRef;

  private appliMenuSubscription: Subscription;
  private appliMenu: AppliMenuModel[] = [];

  private globalTimeout = null;
  public resultToShow: SearchResultsModel[] = [];
  public isDisplayResultPopup: boolean;

  public searchBarForm: FormGroup;

  private angularLogoPath: string =
    "../../../../assets/Pictures/Logo/AngularPng.png";
  private javascriptLogoPath: string =
    "../../../../assets/Pictures/Logo/JavascriptLogo.png";

  constructor(
    private fb: FormBuilder,
    private appliService: AppliService,
    private stringFunctionsService: StringFunctionsService,
    private documentClickService: DocumentClickService
  ) {}

  ngOnInit(): void {
    this.searchBarForm = this.fb.group({
      searchInput: "",
    });

    this.appliMenuSubscription = this.appliService
      .getAppliMenu()
      .pipe(filter((appliMenu) => appliMenu.availableForSearchBar))
      .subscribe((appliMenu) => this.appliMenu.push(appliMenu));

    this.documentClickSubscription = this.documentClickService.documentClickedTarget.subscribe(
      (target) => this.documentClickListener(target)
    );
  }

  public isMonCompteSection(url: string): boolean {
    return url.toLowerCase().includes("MonCompte".toLowerCase());
  }

  public searchBarFormReset(): void {
    this.searchBarForm.reset();
  }

  public showPopup(event?: any) {
    if (this.resultToShow.length) {
      this.isDisplayResultPopup = true;
    }
  }
  public closePopup(): void {
    this.isDisplayResultPopup = false;
  }
  public logoSectionPath(url: string): string {
    if (url.toLowerCase().includes("angular")) {
      return this.angularLogoPath;
    } else if (url.toLowerCase().includes("javascript")) {
      return this.javascriptLogoPath;
    }
  }

  public newInputInSearchBar(){
    if(this.globalTimeout != null){
      clearTimeout(this.globalTimeout);
    }
    this.globalTimeout = setTimeout(()=> this.search() ,300);
  }

  private search() {
    this.globalTimeout = null;
    let result: SearchResultsModel[] = [];
    const input: string = this.searchBarForm.value.searchInput;
    if (input.length >= 2) {
      const inputArray = input.trim().split(" ");
      //on cherche dans appliMenu
      const appliMenuSearchResult = this.searchInAppliMenu(inputArray);
      //On verifie si un mot est exactement egal à un keyword
      //pour rechercher uniquement dans cet appliMenu
      let appliMenuSearchResultAfterVerification: SearchResultsModel[];
      if (appliMenuSearchResult) {
        appliMenuSearchResultAfterVerification = appliMenuSearchResult.filter(
          (element) => element.input.toLowerCase() === element.keywordFound.toLowerCase()
        );
      }
      if (appliMenuSearchResult && appliMenuSearchResultAfterVerification.length) {
        //Si le nombre de mot dans Input Array est le même que dans la verification;
        //on push le resultat
        if(inputArray.length == appliMenuSearchResultAfterVerification.length){
          appliMenuSearchResult.forEach(
            appliMenu => result.push(appliMenu)
          )
        }
        //Si un mot est exactement égal, on continue la recherche
        //dans le chapterMenu et lessonsMenu de l'appliMenu correspondant
        appliMenuSearchResultAfterVerification.forEach((element) => {
          //On supprime du tableau inputArray le mot qui a validé la verification au appliMenuSearch
          //pour ne plus le rechercher dans les mots clés
          const indexOfWordInputVerification = inputArray.indexOf(element.input);
          if(indexOfWordInputVerification != -1){
            inputArray.splice(indexOfWordInputVerification,1);
          }
          //on recherche dans chaptersMenu
          const chaptersMenuResult: SearchResultsModel[] = this.searchInAppliMenuChaptersMenu(
            inputArray,
            element.appliMenu
          );
          //On recherche dans lessonsMenu
          const lessonsMenuResult: SearchResultsModel[] = this.searchInAppliMenuChaptersMenuLessonsMenu(
            inputArray,
            element.appliMenu
          );
          //On push les resultats dans result
          if (chaptersMenuResult) {
            chaptersMenuResult.forEach((element) => result.push(element));
          }
          if (lessonsMenuResult) {
            lessonsMenuResult.forEach((element) => result.push(element));
          }
        });
      } else {
        //Sinon on push les resultats dans result
        if(appliMenuSearchResult){
          appliMenuSearchResult.forEach(
            appliMenu => result.push(appliMenu)
          )
        }
        //On cherche dans chaptersMenu
        const chaptersMenuSearchResult = this.searchInAppliMenuChaptersMenu(
          inputArray
        );
        if (chaptersMenuSearchResult) {
          chaptersMenuSearchResult.forEach((element) => result.push(element));
        }
        //On cherche dans lessonsMenu
        const lessonsMenuSearchResult = this.searchInAppliMenuChaptersMenuLessonsMenu(
          inputArray
        );
        if (lessonsMenuSearchResult) {
          lessonsMenuSearchResult.forEach((element) => result.push(element));
        }
      }
      console.log(result);
      
      if(result.length > 0){
        //On trie par keywordFound
        result = result.sort((a,b) => {
          const nameA = a.input.toUpperCase();
          const nameB =  b.keywordFound.toUpperCase();
          let compare: number;
          if (nameA > nameB) {
            compare = 1;
          } else if (nameA < nameB) {
            compare = -1;
          }
          return compare;
        })

        this.resultToShow = result;
        this.showPopup();
      } else {
        this.closePopup();
      }
    } else {
      this.resultToShow = [];
      this.closePopup();
    }
  }

  private searchInAppliMenu(inputArray: string[]): SearchResultsModel[] {
    let result = [];
    this.appliMenu.forEach((appliMenu) => {
      if (appliMenu.keywords.length) {
        inputArray.forEach((inputWord) => {
          let keywordsFound = this.searchInKeywords(appliMenu.keywords,inputWord);
          if (keywordsFound.length) {
            keywordsFound.forEach((word: string) => {
              result.push({
                name: appliMenu.name,
                url: appliMenu.url,
                keywordFound: this.stringFunctionsService.capitalizeFirstLetter(word),
                input: inputWord,
                appliMenu: [appliMenu],
              });
            });
          }
        });
      }
    });
    return result.length ? result : null;
  }

  private searchInAppliMenuChaptersMenu(inputArray: string[],appliMenu = this.appliMenu): SearchResultsModel[] {
    let result = [];
    appliMenu.forEach((appliMenu) => {
      appliMenu.chaptersMenu
        //on filtre les chapterMenu de appliMenu qui ont des keywords
        .filter((chapterMenu) => chapterMenu.keywords)
        .forEach((chapterMenu) => {
          inputArray.forEach((inputWord) => {
            const keywordsFound = this.searchInKeywords(
              chapterMenu.keywords,
              inputWord
            );
            if (keywordsFound.length) {
              keywordsFound.forEach((keyword) =>
                result.push({
                  name: chapterMenu.name,
                  url: chapterMenu.url,
                  keywordFound: this.stringFunctionsService.capitalizeFirstLetter(keyword),
                  input: inputWord,
                })
              );
            }
          });
        });
    });
    return result.length ? result : null;
  }

  private searchInAppliMenuChaptersMenuLessonsMenu(inputArray: string[],appliMenu = this.appliMenu): SearchResultsModel[] {
    let result = [];
    appliMenu.forEach((currentAppliMenu) => {
      currentAppliMenu.chaptersMenu.forEach((chapterMenu) => {
        chapterMenu.lessonsMenu
          .filter((lessonMenu) => lessonMenu.keywords)
          .forEach((lessonMenu) => {
            inputArray.forEach((inputWord) => {
              const keywordsFound = this.searchInKeywords(
                lessonMenu.keywords,
                inputWord
              );
              keywordsFound.forEach((keyword) =>
                result.push({
                  name: lessonMenu.name,
                  url: lessonMenu.url,
                  keywordFound: this.stringFunctionsService.capitalizeFirstLetter(keyword),
                  input: inputWord
                })
              );
            });
          });
      });
    });
    return result.length ? result : null;
  }

  private searchInKeywords(keywordsArray: string[],currentWord: string): string[] {
    let keywordsFound: string[] = [];
    if (currentWord.length > 1) {
      currentWord = this.stringFunctionsService.removeAccents(currentWord);
      keywordsArray.forEach((keyword: string) => {
        keyword = this.stringFunctionsService.removeAccents(keyword);
        if (keyword.toLowerCase().includes(currentWord.toLowerCase())) {
          keywordsFound.push(keyword);
        }
      });
    }
    return keywordsFound;
  }

  private documentClickListener(target: HTMLElement): void {
    //Si le popup est affiché, alors si on clique soit en dehors de la popup
    //ou en dehors de la barre de recherche, on close la popup.
    if (this.isDisplayResultPopup) {
      if (
        !this.searchResultPopup.nativeElement.contains(target) &&
        !this.searchBarFormElement.nativeElement.contains(target)
      ) {
        //console.log("Clicked outside the searchBoxPopup");
        this.closePopup();
      } else {
        //console.log('Clicked inside box');
      }
    }
  }

  ngOnDestroy(): void {
    this.appliMenuSubscription.unsubscribe();
    this.documentClickSubscription.unsubscribe();
  }
}
