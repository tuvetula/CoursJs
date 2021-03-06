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
import { NavbarContainerComponent } from './shared/components/navbar-container/navbar-container.component';
import { NavbarLgComponent } from "./shared/components/navbar-container/navbar-lg/navbar-lg.component";
import { NavbarMobileComponent } from './shared/components/navbar-container/navbar-mobile/navbar-mobile.component';
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";

import { JavascriptService } from './shared/services/Menus/Javascript/javascript.service';
import { AngularService } from "./shared/services/Menus/Angular/angular.service";
import { MyAccountService } from './shared/services/Menus/MyAccount/my-account.service';
import { UserCrudService } from './shared/services/User/user-crud.service';
import { CurrentUserService } from './shared/services/User/current-user.service';
import { NgxImageCompressService } from '../../node_modules/ngx-image-compress';
import { StringFunctionsService } from './shared/services/Utilities/String/string-functions.service';

import { ReqInterceptor } from "./shared/Interceptor/http.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationService } from './shared/services/Auth/authentification.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './shared/components/Modals/signup/signup.component';
import { SigninComponent } from './shared/components/Modals/signin/signin.component';
import { ForgetPasswordComponent } from './shared/components/Modals/forget-password/forget-password.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ScrollUpButtonComponent } from './shared/components/scroll-up-button/scroll-up-button.component';
import { ProfilPictureModule } from './shared/modules/profilPicture.module';
import { SearchBarModule } from './shared/modules/search-bar/search-bar.module';
import { NodeModule } from './node-container/node.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ControlErrorsDirective } from './shared/directives/formErrors/control-errors.directive';
import { FormSubmitDirective } from './shared/directives/formErrors/form-submit.directive';
import { ControlErrorComponent } from './shared/components/control-error/control-error.component';
import { ControlErrorContainerDirective } from './shared/directives/formErrors/control-error-container.directive';
import { ModalComponent } from './shared/components/Modals/modal/modal.component';
import { SigninModalComponent } from './shared/components/Modals/signin-modal/signin-modal.component';
import { SignupModalComponent } from './shared/components/Modals/signup-modal/signup-modal.component';
import { ForgetPasswordModalComponent } from './shared/components/Modals/forget-password-modal/forget-password-modal.component';
import { DeleteAccountModalComponent } from './shared/components/Modals/delete-account-modal/delete-account-modal.component';
import { DeleteAccountComponent } from './shared/components/Modals/delete-account/delete-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarLgComponent,
    PageNotFound404Component,
    SignupComponent,
    SigninComponent,
    ScrollUpButtonComponent,
    NavbarContainerComponent,
    NavbarMobileComponent,
    AccessDeniedComponent,
    ForgetPasswordComponent,
    ControlErrorsDirective,
    FormSubmitDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    ModalComponent,
    SigninModalComponent,
    SignupModalComponent,
    ForgetPasswordModalComponent,
    DeleteAccountModalComponent,
    DeleteAccountComponent
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
    NodeModule,
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
  entryComponents: [SigninModalComponent,SignupModalComponent,ForgetPasswordModalComponent]
})
export class AppModule {}
