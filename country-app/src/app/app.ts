import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appfooter } from "./shared/components/appfooter/appfooter";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Appfooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('country-app');
}
