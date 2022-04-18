import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProjectComponent } from "./project/project.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
   declarations: [AppComponent, HomePageComponent, ProjectComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatToolbarModule,
      MatChipsModule,
      FlexLayoutModule,
      NgbModule,
   ],
   exports: [],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
