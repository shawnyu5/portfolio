import { Component, OnInit } from "@angular/core";
import IProject from "src/types/project";
import { ProjectService } from "../project.service";

@Component({
   selector: "app-project",
   templateUrl: "./project.component.html",
   styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
   projects: Array<IProject> = [{}] as Array<IProject>;
   constructor(private projectService: ProjectService) {}

   ngOnInit(): void {
      this.projects = this.projectService.getProjects();
   }

   onClick(): void {
      console.log("clicked");
      // TODO: redirect somewhere
   }
}
