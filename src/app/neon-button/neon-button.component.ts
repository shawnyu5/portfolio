import { DOCUMENT } from "@angular/common";
import { Component, Inject, Input, OnInit } from "@angular/core";

@Component({
   selector: "app-neon-button",
   templateUrl: "./neon-button.component.html",
   styleUrls: ["./neon-button.component.scss"],
})
export class NeonButtonComponent implements OnInit {
   @Input()
   redirectLink: string | undefined;

   constructor() {}

   ngOnInit(): void {}
}
