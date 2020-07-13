import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { MyAccountParametresComponent } from "./my-account-parametres.component";
import { ThemesService } from "src/app/shared/services/Themes/themes.service.ts.service";

let fixture: ComponentFixture<MyAccountParametresComponent>;

describe("my account parametres", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountParametresComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MyAccountParametresComponent);
    fixture.detectChanges();
  }));
  it("MyAccountParametres should be created", async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render nonActiveThemeName in a button tag", () => {
    const instance = fixture.componentInstance;
    const text = fixture.debugElement.nativeElement.querySelector("button")
      .textContent;
    expect(text).toEqual(instance.nonActiveThemeName);
  });

  it("nonActiveThemeName value", () => {
    const instance = fixture.componentInstance;
    const themesService = fixture.debugElement.injector.get(ThemesService);
    themesService.nonActiveThemeName.subscribe((nonActiveThemeName) => {
      expect(nonActiveThemeName).toBe(instance.nonActiveThemeName);
    });
  });
});
