import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
   public isMenuCollapsed = true;

   constructor(private viewportScroller: ViewportScroller) {}

   ngOnInit(): void {}

   /**
    * @param isMenuCollapsed - weather the menu is collapsed or not
    * @param anchor - the anchor to scroll to
    */
   onClick(isMenuCollapsed: boolean, anchor: string): void {
      this.isMenuCollapsed = isMenuCollapsed;
      this.viewportScroller.scrollToAnchor(anchor);
   }
}
