import { Component, OnInit } from "@angular/core";
import { HomePageService } from "../home-page/home-page.service";

@Component({
   selector: "app-intro",
   templateUrl: "./intro.component.html",
   styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
   aboutMe: string = "";
   profileImage: string = "";
   constructor(private homePageService: HomePageService) {}

   ngOnInit(): void {
      this.aboutMe = this.homePageService.getAboutMe();
      this.profileImage = this.homePageService.getProfileImage();
   }
}
