import { Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { CoutrySearch } from '../../components/coutry-search/coutry-search';
import { Object } from '../../interfaces/res-countries.interfaces';

@Component({
  selector: 'app-by-region-page',
  imports: [CoutrySearch, CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countries = signal<Object[]>([]);
  searchByRegion(value: string) {
    console.log("Searching by region...", value);
  }
}
