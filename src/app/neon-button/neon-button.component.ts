import { Component, Input, OnInit } from "@angular/core";

@Component({
   selector: "app-neon-button",
   templateUrl: "./neon-button.component.html",
   styleUrls: ["./neon-button.component.scss"],
})
export class NeonButtonComponent implements OnInit {
   /**
    * redirect link of the button upon click
    */
   @Input()
   redirectLink: string = "";

   /**
    * Optional target of the link
    */
   @Input()
   target: string | undefined;

   // @Input()
   // emoji: string | undefined;

   constructor() {}

   ngOnInit(): void {}
}
