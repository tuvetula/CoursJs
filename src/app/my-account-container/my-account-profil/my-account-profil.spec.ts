import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { MyAccountProfilComponent } from "./my-account-profil.component";
import { CurrentUserService } from "src/app/shared/services/User/current-user.service";
import { AppModule } from 'src/app/app.module';

let fixture: ComponentFixture<MyAccountProfilComponent>;

describe("my account profil", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountProfilComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(MyAccountProfilComponent);
    fixture.detectChanges();
  }));
  it('MyAccountProfil should be created', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
 }));

  it("currentUser value should be equal to currentUser observable", () => {
    const instance = fixture.componentInstance;
    const currentUserService = fixture.debugElement.injector.get(
      CurrentUserService
    );
    currentUserService.currentUser.subscribe((user) => {
      fixture.detectChanges();
      expect(user).toEqual(instance.currentUser);
    });
  });
  afterEach(()=>{
    fixture.destroy();
  })
});
