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
import { NavbarComponent } from "./navbar/navbar.component";
import { MatButtonModule } from "@angular/material/button";
import { NeonButtonComponent } from "./neon-button/neon-button.component";
import { IntroComponent } from './intro/intro.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      ProjectComponent,
      NavbarComponent,
      NeonButtonComponent,
      IntroComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatToolbarModule,
      MatChipsModule,
      FlexLayoutModule,
      NgbModule,
      MatButtonModule,
   ],
   exports: [],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
