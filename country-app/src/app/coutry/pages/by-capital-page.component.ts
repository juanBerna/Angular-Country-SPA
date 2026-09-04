import { Component } from "@angular/core";

@Component({
  selector: "app-by-capital-page",
  templateUrl: "./by-capital-page.component.html",
  imports: [],
})
export class ByCapitalPageComponent {

  searchByCapital() {
    console.log("Searching by capital...");
  }
}
