import { DebugElement, inject } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomePageService } from "./home-page.service";

import { HomePageComponent } from "./home-page.component";
import { By } from "@angular/platform-browser";

describe("HomePageComponent", () => {
   let component: HomePageComponent;
   let fixture: ComponentFixture<HomePageComponent>;
   let debugElement: DebugElement;
   let service: HomePageService;

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
      service = new HomePageService();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   // TODO: this component is no longer responsible for these. Move tests to their respective components
   xit("should display name", () => {
      let h1 = debugElement.queryAll(By.css("h1"));
      let found = false;
      h1.forEach((element) => {
         if (
            element.nativeElement.textContent == "Hello" ||
            element.nativeElement.textContent == "I'm Shawn Yu"
         )
            found = true;
      });

      expect(found).toBe(true);
   });

   xit("Should display about me", () => {
      let expected = service.getAboutMe();
      let aboutMe = debugElement.queryAll(By.css("#intro p"));

      let found = false;
      aboutMe.forEach((element: any) => {
         if (element.nativeElement.textContent == expected) {
            found = true;
         }
      });
      expect(found).toBeTrue();
   });
});
