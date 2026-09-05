import { Component, input } from "@angular/core";
import { CoutrySearch } from "../../components/coutry-search/coutry-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: "app-by-capital-page",
  templateUrl: "./by-capital-page.component.html",
  imports: [CoutrySearch, CountryList],
})
export class ByCapitalPageComponent {


  searchByCapital(value: string) {
    console.log("Searching by capital...", value);
  }
}
