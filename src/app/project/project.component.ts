import { Component, Inject, OnInit } from "@angular/core";
import IProject from "src/types/project";
import { ProjectService } from "../project.service";
import { DOCUMENT } from "@angular/common";
import { LogoComponent, LogoText } from "src/app/logo/logo.component";

@Component({
   selector: "app-project",
   templateUrl: "./project.component.html",
   styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
   htmlString = "<h1>hello</h1>";
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
}
