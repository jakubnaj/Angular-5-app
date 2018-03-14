import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./content/components/first/first.component";
import { SecondComponent } from "./content/components/second/second.component";
import { ThirdComponent } from "./content/components/third/third.component";
import { FourthComponent } from "./content/components/fourth/fourth.component";

const appRoutes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "third", component: ThirdComponent },
  { path: "fourth", component: FourthComponent },
  { path: "", redirectTo: "/first", pathMatch: "full" },
  { path: "**", component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}
