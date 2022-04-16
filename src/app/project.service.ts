import { Injectable } from "@angular/core";
import IProject from "../types/project";
import projects from "../data/projects.json";
@Injectable({
   providedIn: "root",
})
export class ProjectService {
   constructor() {}

   /**
    * @returns array of projects from `projects.json`
    */
   getProjects(): Array<IProject> {
      // @ts-ignore
      return projects;
   }
}
