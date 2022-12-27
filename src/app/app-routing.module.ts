import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
   { path: "", component: HomePageComponent },
   { path: "auth", component: AuthComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
