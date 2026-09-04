import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./coutry/country.routes')
  },
  {
    path: '**',
    redirectTo: 'HomePageComponent'
  }
];
