import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { NavBarComponent } from "./nav-bar.component";
import { By } from "@angular/platform-browser";
import { elementAt } from "rxjs";

describe("NavBarComponent", () => {
   let component: NavBarComponent;
   let fixture: ComponentFixture<NavBarComponent>;
   let debugElement: DebugElement[];
   let htmlELement: HTMLElement;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [NavBarComponent],
      }).compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(NavBarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      component = fixture.componentInstance;
      debugElement = fixture.debugElement.queryAll(By.css(".nav-item"));
      // htmlELement = debugElement[0].nativeElement;
   });

   it("should create", () => {
      expect(component).toBeTruthy();
   });

   it("should contain correct element text", () => {
      let barText = ["Home", "Projects", "Contact"];
      // console.log(htmlELement.textContent);
      let index = 0;
      debugElement.forEach((element) => {
         expect(element.nativeElement.textContent).toMatch(barText[index]);
         index++;
      });
   });
});
