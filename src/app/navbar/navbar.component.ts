import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
   public isMenuCollapsed = true;

   constructor(private viewportScroller: ViewportScroller) {}

   ngOnInit(): void {}

   onClick(isMenuCollapsed: boolean, anchor: string): void {
      this.isMenuCollapsed = isMenuCollapsed;
      this.viewportScroller.scrollToAnchor(anchor);
   }
}
