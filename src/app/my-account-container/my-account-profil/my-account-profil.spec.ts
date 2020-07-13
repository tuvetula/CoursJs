import { TestBed, async } from "@angular/core/testing";
import { MyAccountProfilComponent } from "./my-account-profil.component";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { AppModule } from 'src/app/app.module';

describe("my account profil", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountProfilComponent],
      imports: [AppModule]
    }).compileComponents();
  }));
  it('MyAccountProfil should be created', async(() => {
    const fixture = TestBed.createComponent(MyAccountProfilComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
 }));

  it("currentUser value should be equal to currentUser observable", () => {
    const fixture = TestBed.createComponent(MyAccountProfilComponent);
    const instance = fixture.componentInstance;
    const currentUserService = fixture.debugElement.injector.get(
      CurrentUserService
    );
    currentUserService.currentUser.subscribe((user) => {
      fixture.detectChanges();
      expect(user).toEqual(instance.currentUser);
    });
  });
});
