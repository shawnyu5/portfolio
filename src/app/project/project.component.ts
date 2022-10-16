import { Component, Inject, OnInit } from "@angular/core";
import IProject from "src/types/project";
import { ProjectService } from "../project.service";
import { DOCUMENT } from "@angular/common";
import { LogoText } from "src/app/logo/logo.component";

@Component({
   selector: "app-project",
   templateUrl: "./project.component.html",
   styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
   /**
    * Array of projects
    */
   projects: Array<IProject> = [{}] as Array<IProject>;
   logoText = LogoText;
   constructor(
      private projectService: ProjectService,
      @Inject(DOCUMENT) private document: Document
   ) {}

   ngOnInit(): void {
      this.projects = this.projectService.getProjects();
   }

   /**
    * redirects to an external url
    * @param url - url to redirect to
    */
   redirect(url: string): void {
      this.document.location.href = url;
   }

   /**
    * Brings the LogoText enum into this scope, to be accessible with in this component
    * @returns LogoText enum
    */
   get LogoText(): typeof LogoText {
      return LogoText;
   }

   // generateHTMLButton(button: IProject["buttons"][0]): string {
   // return `HELLO <i class="fa fa-github"></i>`;
   // // let logo = new LogoComponent();
   // // if (button.text == this.logoText.demo) {
   // // return `<app-neon-button class="card-footer"
   // // redirectLink="${button.link}" target="_blank">
   // // ${button.text} <logo logoName="{{ logoText.demo }}"></logo>
   // // </app-neon-button>`;
   // // } else {
   // // return `<app-neon-button class="card-footer"
   // // redirectLink="${button.link}" target="_blank">
   // // ELSE <i class="fa fa-github"></i>
   // // </app-neon-button>`;
   // // }

   // // return `<app-neon-button *ngIf="button.text == logoText.demo; else elseBlock" class="card-footer"
   // // redirectLink="{{ button.link }}" target="_blank">
   // // HELLO <logo logoName="{{ logoText.demo }}"></logo>
   // // </app-neon-button>`;
   // }
}
