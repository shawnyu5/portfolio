import { ComponentFixture, TestBed } from "@angular/core/testing";
import projects from "../../data/projects.json";
import { ProjectComponent } from "./project.component";
import { DOCUMENT } from "@angular/common";

describe("ProjectComponent", () => {
   let component: ProjectComponent;
   let fixture: ComponentFixture<ProjectComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [ProjectComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(ProjectComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("should render as many cards as there are projects", () => {
      const compiled = fixture.debugElement.nativeElement;
      let numberOfCards = projects.length;
      // count how mant mat cards are rendered
      let numberOfMatCards = compiled.querySelectorAll("mat-card").length;
      expect(numberOfMatCards).toEqual(numberOfCards);
   });

   it("should render all cards", () => {
      const compiled = fixture.debugElement.nativeElement;
      let cards = compiled.querySelectorAll("mat-card");
      let counter = 0;
      cards.forEach((card: any) => {
         expect(card.innerHTML).toContain(projects[counter].title);
         expect(card.innerHTML).toContain(projects[counter].description);
         counter++;
      });
   });

   // TODO: idk how to write this test
   xit("should link to the correct projects", () => {
      let document = new Document();
      const compiled = fixture.debugElement.nativeElement;
      let cards = compiled.querySelectorAll("mat-card");
      let counter = 0;
      cards.forEach((card: any) => {
         // spyOn(document, "location.href");
         // card.click();
         // expect(document.location.href).toHaveBeenCalledWith(
         // projects[counter].url
         // );
         // let currentUrl = window.location.href;
         // expect(currentUrl).toBe(projects[counter].url);
         counter++;
         // go back to previous page
      });
   });
});
