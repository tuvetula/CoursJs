import { MyAccountContainerComponent } from "./my-account-container.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { AppModule } from '../app.module';

let fixture: ComponentFixture<MyAccountContainerComponent>;

describe("my account container", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountContainerComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(MyAccountContainerComponent);
    fixture.detectChanges();
  });

  it("componentName should be Mon compte", () => {
    const instance = fixture.componentInstance;
    expect(instance.componentName).toEqual("Mon compte");
  });

  afterEach(()=>{
    fixture.destroy();
  });
});
