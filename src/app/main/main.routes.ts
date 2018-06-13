import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HelpComponent } from '../pages/help/help.component';
import { MessageComponent } from '../pages/message/message.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
    data: { title: 'Dashboard' }
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];
