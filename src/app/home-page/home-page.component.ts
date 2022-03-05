import { Component, OnInit } from "@angular/core";
import { HomePageService } from "./home-page.service";

@Component({
   selector: "app-home-page",
   templateUrl: "./home-page.component.html",
   styleUrls: ["./home-page.component.css"],
   providers: [HomePageService],
})
export class HomePageComponent implements OnInit {
   aboutMe: string = "";
   constructor(private homePageService: HomePageService) {}

   ngOnInit(): void {
      this.aboutMe = this.homePageService.getAboutMe();
   }
}
