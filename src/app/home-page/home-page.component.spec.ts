import { DebugElement, inject } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomePageService } from "./home-page.service";

import { HomePageComponent } from "./home-page.component";
import { By } from "@angular/platform-browser";

describe("HomePageComponent", () => {
   let component: HomePageComponent;
   let fixture: ComponentFixture<HomePageComponent>;
   let debugElement: DebugElement;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [HomePageComponent],
         providers: [HomePageService],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(HomePageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.css("#intro"));
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
