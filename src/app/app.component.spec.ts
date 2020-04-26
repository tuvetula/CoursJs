import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { By } from '@angular/platform-browser';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it("test app title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;

    fixture.detectChanges();
    expect(title.textContent).toEqual('Coucou app3');
  });
});


