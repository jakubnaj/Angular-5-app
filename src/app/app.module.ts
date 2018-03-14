import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RoutingModule } from "./app-routing.module";
import { FirstComponent } from "./content/components/first/first.component";
import { SecondComponent } from "./content/components/second/second.component";
import { ThirdComponent } from "./content/components/third/third.component";
import { FourthComponent } from "./content/components/fourth/fourth.component";
import { PagerService } from "./content/services/pager/pager.service";
import { JsonPlaceholderService } from "./content/services/json-placeholder/json-placeholder.service";
import { DataManipulationService } from "./content/services/data-manipulation/data-manipulation.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  providers: [JsonPlaceholderService, PagerService, DataManipulationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
