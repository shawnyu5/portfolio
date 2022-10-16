import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StupidHacksPresentationComponent } from "./stupid-hacks-presentation.component";

describe("StupidHacksPresentationComponent", () => {
   let component: StupidHacksPresentationComponent;
   let fixture: ComponentFixture<StupidHacksPresentationComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [StupidHacksPresentationComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(StupidHacksPresentationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
