import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
// import { StupidHacksPresentationComponent } from "./stupid-hacks-presentation/stupid-hacks-presentation.component";

const routes: Routes = [
   { path: "", component: HomePageComponent },
   // { path: "hacks", component: StupidHacksPresentationComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
