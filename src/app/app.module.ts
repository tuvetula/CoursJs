import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AngularModule } from "./angular-container/angular.module";
import { JavascriptModule } from './javascript-container/javascript.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./shared/components/NavBarList/navbar/navbar.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";

import { ListMenuLeftService } from "./shared/services/list-menu-left.service";
import { AppliService } from './shared/services/appli.service';
import { JavascriptService } from './shared/services/Javascript/javascript.service';
import { AngularService } from "./shared/services/Angular/angular.service";

import { ReqInterceptor } from "./shared/Interceptor/http.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationService } from './shared/services/authentification.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ThemesService } from './shared/services/Themes/themes.service.ts.service';
import { MyAccountModule } from './my-account-container/my-account.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PageNotFound404Component,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularModule,
    JavascriptModule,
    MyAccountModule,
    AppRoutingModule,
  ],
  providers: [
    AuthentificationService,
    AuthGuard,
    AngularFireAuth,
    ThemesService,
    ListMenuLeftService,
    AppliService,
    AngularService,
    JavascriptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
