import { Component, inject, resource, signal } from '@angular/core';
import { CoutrySearch } from '../../components/coutry-search/coutry-search';
import { CountryList } from '../../components/country-list/country-list';
import { Object, RESTCountry } from '../../interfaces/res-countries.interfaces';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CoutrySearch, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryServive = inject(CountryService);
  query = signal<string>("");

  countryResource = rxResource({
    params: ()=>  ({query:this.query()}),
    stream: ({params}: {params: {query: string}}) => {
      if(!params.query) return of([]);
      return this.countryServive.searchByCountry(params.query);
    }
  })
}
