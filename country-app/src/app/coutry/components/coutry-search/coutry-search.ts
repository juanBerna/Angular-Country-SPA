import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-coutry-search',
  imports: [],
  templateUrl: './coutry-search.html',
})
export class CoutrySearch {
  value = output<string>();
  placeholder = input<string>("Search...");
}
