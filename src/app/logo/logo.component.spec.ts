import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GitHubLogoComponent } from "./git-hub-logo.component";

describe("GitHubLogoComponent", () => {
   let component: GitHubLogoComponent;
   let fixture: ComponentFixture<GitHubLogoComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [GitHubLogoComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(GitHubLogoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });
});
