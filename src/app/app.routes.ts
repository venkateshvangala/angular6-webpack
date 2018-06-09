import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      },
      {
        path: 'main',
        component: MainComponent,
        loadChildren: './main/main.module#MainModule'
      }
    ]
  }
];
