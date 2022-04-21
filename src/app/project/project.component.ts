import { Component, Inject, OnInit } from "@angular/core";
import IProject from "src/types/project";
import { ProjectService } from "../project.service";
import { DOCUMENT } from "@angular/common";

@Component({
   selector: "app-project",
   templateUrl: "./project.component.html",
   styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
   projects: Array<IProject> = [{}] as Array<IProject>;
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
}
