import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HelpComponent } from '../pages/help/help.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    data: { title: 'Dashboard' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'help',
    component: HelpComponent,
    data: { title: 'Dashboard' }
  },
];
