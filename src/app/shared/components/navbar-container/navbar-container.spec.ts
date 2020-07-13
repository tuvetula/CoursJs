import { TestBed, async } from "@angular/core/testing"
import { NavbarContainerComponent } from './navbar-container.component'
import { ScreenSizeService } from '../../services/Utilities/screen-size.service';
import { AppModule } from 'src/app/app.module';

describe('navbar container',()=>{
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [NavbarContainerComponent],
            imports:[AppModule]
        }).compileComponents();
    }));
    it('showNavbarMobile is true under 960px',()=>{
        const fixture = TestBed.createComponent(NavbarContainerComponent);
        const screenSizeService = fixture.debugElement.injector.get(ScreenSizeService);
        screenSizeService.windowInnerWidth.subscribe(
            (windowInnerWidth: number) => {
                if(windowInnerWidth < 960){
                    fixture.detectChanges();
                    expect(fixture.componentInstance.showNavbarMobile).toBeTruthy();
                } else {
                    fixture.detectChanges();
                    expect(fixture.componentInstance.showNavbarMobile).toBeFalsy();
                }
            }).unsubscribe();
    })
})