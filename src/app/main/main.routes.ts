import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HelpComponent } from '../pages/help/help.component';
import { StaffComponent } from '../pages/staff/staff.component';
import { MessageComponent } from '../pages/message/message.component';
import { StaffSecondPartComponent } from '../pages/staff-second-part/staff-second-part.component';

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
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'staff-second-part',
    component: StaffSecondPartComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];
