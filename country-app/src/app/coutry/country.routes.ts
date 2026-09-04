import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page.component';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';


export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
export default countryRoutes;
