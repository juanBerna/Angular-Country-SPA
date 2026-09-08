import { Component, input } from '@angular/core';
import { Object } from '../../interfaces/res-countries.interfaces';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<Object[]>();
  errorMessage = input<undefined>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
