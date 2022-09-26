import { Component, Input, OnInit } from "@angular/core";

export enum LogoText {
   // gitHub logo
   github = "Github",
   demo = "Demo",
}

@Component({
   selector: "logo",
   templateUrl: "./logo.component.html",
   styleUrls: ["./logo.component.scss"],
})
export class LogoComponent implements OnInit {
   types: LogoText;
   @Input()
   logoName: string | undefined;

   constructor() {
      this.types = LogoText.github;
   }

   ngOnInit(): void {}

   get LogoText(): typeof LogoText {
      return LogoText;
   }
}
