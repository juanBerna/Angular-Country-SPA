import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, delay, map, throwError } from "rxjs";
import { RESTCountry, Object } from "../interfaces/res-countries.interfaces";
import { CountryResponse } from "../interfaces/country.interface";

const API_URL = "https://api.restcountries.com/countries/v5";
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  constructor() {}

//   fcurl "https://api.restcountries.com/countries/v5/capitals/Tokyo?pretty=1" -H "Authorization: Bearer rc_live_3add89d4cfd9417c88825f52c6e0fe93";
  searchByCapital(capital: string) {


    capital = capital.toLowerCase();

    return this.http.get<RESTCountry>(`${API_URL}/capitals/${capital}`, {
      headers: {
        Authorization: 'Bearer rc_live_3add89d4cfd9417c88825f52c6e0fe93'
      }
    }).pipe(
      map((response): Object[] => {
        const countries = response.data.objects;

        if (countries.length === 0) {
          throw new Error(`No country found for capital: ${capital}`);
        }

        return countries;
      })
    );
  }

  // /countries/v5/names.common?q=ger
  searchByCountry(country: string) {
    const query = country.trim().toLowerCase();

    if (!query) {
      return throwError(() => new Error('Enter a country name to search.'));
    }

    return this.http.get<RESTCountry>(`${API_URL}/names.common?q=${query}`, {
      headers: {
        Authorization: 'Bearer rc_live_3add89d4cfd9417c88825f52c6e0fe93'
      }
    }).pipe(
      map((response: RESTCountry) => {
        const countries = response.data.objects;

        if (countries.length === 0) {
          throw new Error(`No country found for: ${country}`);
        }

        return countries;
      }),
      catchError((error: HttpErrorResponse | Error) => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          return throwError(() => new Error(`No country found for: ${country}`));
        }

        if (error instanceof HttpErrorResponse && error.status === 400) {
          return throwError(() => new Error('The country search is invalid.'));
        }

        return throwError(() => error);
      })
    )
  }

  }
