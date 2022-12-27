import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
   selector: "app-auth",
   templateUrl: "./auth.component.html",
   styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
   authCode: string | null = null;
   constructor(private router: ActivatedRoute) {
      console.log(this.router.url);
   }

   ngOnInit(): void {
      this.router.queryParamMap.subscribe((params) => {
         this.authCode = params.get("code");
         console.log(
            "AuthComponent#constructor params: %s",
            JSON.stringify(params)
         ); // __AUTO_GENERATED_PRINT_VAR__
      });
   }
}
