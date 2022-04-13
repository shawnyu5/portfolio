import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProjectComponent } from "./project/project.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomePageComponent,
      ProjectComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      FlexLayoutModule,
      MatChipsModule,
      MatCardModule,
   ],
   exports: [NavBarComponent],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
