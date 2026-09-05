import { Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CoutrySearch } from '../../components/coutry-search/coutry-search';

@Component({
  selector: 'app-by-region-page',
  imports: [CoutrySearch, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  searchByRegion(value: string) {
    console.log("Searching by region...", value);
  }
}
