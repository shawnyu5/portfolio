import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LogoComponent } from "./logo.component";

describe("GitHubLogoComponent", () => {
   let component: LogoComponent;
   let fixture: ComponentFixture<LogoComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [LogoComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(LogoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
