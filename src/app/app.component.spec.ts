import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModule } from './app.module';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppModule]
    }).compileComponents();
  }));
});
