import { TestBed, async } from "@angular/core/testing";
import { MyAccountParametresComponent } from "./my-account-parametres.component";
import { ThemesService } from "src/app/shared/services/Themes/themes.service.ts.service";

describe("my account parametres", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountParametresComponent],
    }).compileComponents();
  }));
  it("MyAccountParametres should be created", async(() => {
    const fixture = TestBed.createComponent(MyAccountParametresComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render nonActiveThemeName in a button tag", () => {
    const fixture = TestBed.createComponent(MyAccountParametresComponent);
    fixture.detectChanges();
    const instance = fixture.componentInstance;
    const text = fixture.debugElement.nativeElement.querySelector("button")
      .textContent;
      console.log(text);
    expect(text).toEqual(instance.nonActiveThemeName);
  });

  it("nonActiveThemeName value", () => {
    const fixture = TestBed.createComponent(MyAccountParametresComponent);
    const instance = fixture.componentInstance;
    const themesService = fixture.debugElement.injector.get(ThemesService);
    themesService.nonActiveThemeName.subscribe((nonActiveThemeName) => {
      fixture.detectChanges();
      expect(nonActiveThemeName).toBe(instance.nonActiveThemeName);
    });
  });
});
