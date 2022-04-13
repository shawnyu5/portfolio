import { Injectable } from "@angular/core";
import data from "../../../data/homePage.json";

@Injectable({
   providedIn: "root",
})
export class HomePageService {
   constructor() {}

   /**
    * @returns about me text from json
    */
   getAboutMe(): string {
      return data.aboutMe;
   }

   getProfileImage() {
      return data.profileImage;
   }
}
