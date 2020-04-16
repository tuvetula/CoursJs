import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AngularModule } from "./angular-container/angular.module";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./shared/components/NavBarList/navbar/navbar.component";
import { PageNotFound404Component } from "./page-not-found404/page-not-found404.component";

import { ListMenuLeftService } from "./shared/services/list-menu-left.service";

import { ReqInterceptor } from "./shared/Interceptor/http.interceptor";
import { AngularService } from "./shared/services/Angular/angular.service";
import { RouteService } from './shared/services/route.service';
import { SousMenuCollapseComponent } from './shared/components/NavBarList/navbar/sous-menu-collapse/sous-menu-collapse.component';
import { AppliService } from './shared/services/appli.service';
import { JavascriptService } from './shared/services/Javascript/javascript.service';
import { JavascriptModule } from './javascript-container/javascript.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SousMenuCollapseComponent,
    PageNotFound404Component,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularModule,
    JavascriptModule,
    AppRoutingModule,
  ],
  providers: [
    ListMenuLeftService,
    AppliService,
    AngularService,
    JavascriptService,
    RouteService,
    AppliService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
