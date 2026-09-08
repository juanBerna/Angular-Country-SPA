import { Component, inject, input, resource, signal } from "@angular/core";
import { CoutrySearch } from "../../components/coutry-search/coutry-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from "../../services/country.service";
import { Object } from "../../interfaces/res-countries.interfaces";
import { firstValueFrom, of } from "rxjs";
import { rxResource } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-by-capital-page",
  templateUrl: "./by-capital-page.component.html",
  imports: [CoutrySearch, CountryList],
})
export class ByCapitalPageComponent {

  countryServive = inject(CountryService);
  query = signal<string>("");

capitalResource = rxResource({
    params: ()=>  ({query:this.query()}),
    stream: ({params}: {params: {query: string}}) => {
      if(!params.query) return of([]);
      return this.countryServive.searchByCapital(params.query);
    }
  });

}
