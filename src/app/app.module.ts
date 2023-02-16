import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MdbAccordionModule } from "mdb-angular-ui-kit/accordion";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MdbCheckboxModule } from "mdb-angular-ui-kit/checkbox";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbPopoverModule } from "mdb-angular-ui-kit/popover";
import { MdbRadioModule } from "mdb-angular-ui-kit/radio";
import { MdbRangeModule } from "mdb-angular-ui-kit/range";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { MdbScrollspyModule } from "mdb-angular-ui-kit/scrollspy";
import { MdbTabsModule } from "mdb-angular-ui-kit/tabs";
import { MdbTooltipModule } from "mdb-angular-ui-kit/tooltip";
import { MdbValidationModule } from "mdb-angular-ui-kit/validation";

const mdb = [
  MdbAccordionModule,
  MdbCarouselModule,
  MdbCheckboxModule,
  MdbCollapseModule,
  MdbDropdownModule,
  MdbFormsModule,
  MdbModalModule,
  MdbPopoverModule,
  MdbRadioModule,
  MdbRangeModule,
  MdbRippleModule,
  MdbScrollspyModule,
  MdbTabsModule,
  MdbTooltipModule,
  MdbValidationModule,
];

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AboutMeComponent } from "./modules/about-me/about-me.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { HomeComponent } from "./modules/home/home.component";
import { LibsComponent } from "./modules/libs/libs.component";
import { NavigationComponent } from "./modules/navigation/navigation.component";
import { LecturesComponent } from "./modules/lectures/lectures.component";
import { LectureOneComponent } from "./modules/lectures/lecture-one/lecture-one.component";
import { FailedComponent } from "./modules/lectures/modals/failed/failed.component";
import { HelpComponent } from "./modules/lectures/modals/help/help.component";
import { ResultComponent } from "./modules/lectures/modals/result/result.component";
import { NotFoundComponent } from "./modules/lectures/not-found/not-found.component";

import { DataService } from "./services/data.service";
import { HttpClientModule } from "@angular/common/http";
import { TestComponent } from "./modules/navigation/test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FooterComponent,
    HomeComponent,
    LibsComponent,
    NavigationComponent,
    LecturesComponent,
    LectureOneComponent,
    FailedComponent,
    HelpComponent,
    ResultComponent,
    NotFoundComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    mdb,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
