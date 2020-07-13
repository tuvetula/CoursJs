import { MyAccountContainerComponent } from "./my-account-container.component";
import { TestBed } from "@angular/core/testing";
import { AppliService } from '../shared/services/Menus/appli.service';
import { AngularService } from '../shared/services/Menus/Angular/angular.service';
import { JavascriptService } from '../shared/services/Menus/Javascript/javascript.service';
import { MyAccountService } from '../shared/services/Menus/MyAccount/my-account.service';
import { TitlePageComponent } from '../shared/components/title-page/title-page.component';

describe("my account container", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountContainerComponent,TitlePageComponent],
      providers: [AppliService,AngularService,JavascriptService,MyAccountService]
    }).compileComponents();
});
it("componentName should be Mon compte", () => {
    const fixture = TestBed.createComponent(MyAccountContainerComponent);
    const instance = fixture.componentInstance;
    expect(instance.componentName).toEqual("Mon compte");
  });
});
