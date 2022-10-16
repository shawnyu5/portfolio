import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
   selector: "app-stupid-hacks-presentation",
   templateUrl: "./stupid-hacks-presentation.component.html",
   styleUrls: ["./stupid-hacks-presentation.component.scss"],
})
export class StupidHacksPresentationComponent implements OnInit {
   html: string = "";
   constructor(private http: HttpClient) {}

   ngOnInit(): void {
      this.http
         .get("src/static-pages/stupid_hackathon_2022/presentation.html")
         .subscribe((data) => {
            console.log(data);
         });
   }
}
