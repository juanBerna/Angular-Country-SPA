import { Component } from '@angular/core';
import { CoutrySearch } from '../../components/coutry-search/coutry-search';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-country-page',
  imports: [CoutrySearch, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
   searchByCountry(value: string) {
    console.log("Searching by country...", value);
  }
}
