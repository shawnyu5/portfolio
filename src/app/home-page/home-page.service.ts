import { Injectable } from "@angular/core";
import data from "../../../data/homePage.json";

@Injectable({
   providedIn: "root",
})
export class HomePageService {
   constructor() {}

   getAboutMe() {
      return data.aboutMe;
   }

   getProfileImage() {
      return data.profileImage;
   }
}
