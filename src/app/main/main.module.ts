import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ROUTES } from './main.routes';
import { HomeComponent } from '../pages/home/home.component';
import { HelpComponent } from '../pages/help/help.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  declarations: [
    
    HomeComponent,
    HelpComponent
  ],
  exports: [ ]
})
export class MainModule { }
