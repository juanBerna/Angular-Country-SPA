import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CoutryPage } from './pages/coutry-page/coutry-page';


export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },{
        path: 'by-country',
        component: ByCountryPage,
      },{
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: 'by/:codePais',
        component: CoutryPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
export default countryRoutes;
