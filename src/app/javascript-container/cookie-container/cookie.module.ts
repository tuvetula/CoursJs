import { NgModule } from "@angular/core";
import { CookieContainerComponent } from './cookie-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeFormatModule } from 'src/app/shared/modules/codeFormat.module';
import { CookieIntroductionComponent } from './cookie-introduction/cookie-introduction.component';
import { CookieUtilisationComponent } from './cookie-utilisation/cookie-utilisation.component';
import { CookieProprietesComponent } from './cookie-proprietes/cookie-proprietes.component';
import { CookieFirstPartyComponent } from './cookie-first-party/cookie-first-party.component';
import { CookieLocalStorageComponent } from './cookie-local-storage/cookie-local-storage.component';
import { CookieEvenementsStorageComponent } from './cookie-evenements-storage/cookie-evenements-storage.component';

@NgModule({
    declarations: [CookieContainerComponent, CookieIntroductionComponent, CookieUtilisationComponent, CookieProprietesComponent, CookieFirstPartyComponent, CookieLocalStorageComponent, CookieEvenementsStorageComponent],
    imports: [CommonModule,RouterModule,CodeFormatModule]
})
export class CookieModule {}