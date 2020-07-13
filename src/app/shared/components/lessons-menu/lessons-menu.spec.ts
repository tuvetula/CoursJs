import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { LessonsMenuComponent } from './lessons-menu.component';
import { LessonsMenuService } from '../../services/Menus/lessons-menu.service';
import { AppModule } from 'src/app/app.module';

let fixture: ComponentFixture<LessonsMenuComponent>;

describe("lessonsMenu", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LessonsMenuComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LessonsMenuComponent);
    fixture.detectChanges();
  }));
  
  it("LessonsMenuComponent should be created", async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("LessonMenu value should be equal to lessonsMenuService.lessonMenu observable", () => {
    const instance = fixture.componentInstance;
    const lessonsMenuService = fixture.debugElement.injector.get(LessonsMenuService);
    lessonsMenuService.lessonMenu.subscribe((lessonMenu) => {
      // fixture.detectChanges();
      expect(lessonMenu).toEqual(instance.LessonMenu);
    });
  });
  afterEach(()=>{
    fixture.destroy();
  })
});
