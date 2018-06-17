import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ROUTES } from './main.routes';
import { HomeComponent } from '../pages/home/home.component';
import { StaffComponent } from '../pages/staff/staff.component';
import { HelpComponent } from '../pages/help/help.component';
import { MessageComponent } from '../pages/message/message.component';
import { StaffSecondPartComponent } from '../pages/staff-second-part/staff-second-part.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  declarations: [
    HomeComponent,
    MessageComponent,
    StaffComponent,
    StaffSecondPartComponent,
    HelpComponent
  ],
  exports: [ ]
})
export class MainModule { }
