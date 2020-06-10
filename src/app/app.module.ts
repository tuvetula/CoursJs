import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from "./app-routing.module";
import { AngularModule } from "./angular-container/angular.module";
import { JavascriptModule } from './javascript-container/javascript.module';
import { MyAccountModule } from './my-account-container/my-account.module';
import { AdminModule } from './admin-container/admin.module';

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./shared/components/NavBars/navbar/navbar.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";

import { ListMenuLeftService } from "./shared/services/Menus/list-menu-left.service";
import { AppliService } from './shared/services/Menus/appli.service';
import { JavascriptService } from './shared/services/Menus/Javascript/javascript.service';
import { AngularService } from "./shared/services/Menus/Angular/angular.service";
import { MyAccountService } from './shared/services/Menus/MyAccount/my-account.service';
import { UserCrudService } from './shared/services/User/user-crud.service';
import { CurrentUserService } from './shared/services/User/current-user.service';
import { ThemesService } from './shared/services/Themes/themes.service.ts.service';
import { NgxImageCompressService } from '../../node_modules/ngx-image-compress';
import { StringFunctionsService } from './shared/services/Utilities/String/string-functions.service';

import { ReqInterceptor } from "./shared/Interceptor/http.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationService } from './shared/services/Auth/authentification.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ScrollUpButtonComponent } from './shared/components/scroll-up-button/scroll-up-button.component';
import { ProfilPictureModule } from './shared/modules/profilPicture.module';
import { SearchBarModule } from './shared/modules/search-bar/search-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PageNotFound404Component,
    SignupComponent,
    SigninComponent,
    ScrollUpButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ProfilPictureModule,
    HttpClientModule,
    SearchBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularModule,
    JavascriptModule,
    MyAccountModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    AuthentificationService,
    UserCrudService,
    CurrentUserService,
    StringFunctionsService,
    NgxImageCompressService,
    AuthGuard,
    AngularFireAuth,
    AngularService,
    JavascriptService,
    MyAccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
