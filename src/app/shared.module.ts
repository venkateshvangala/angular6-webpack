import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, SidebarComponent, StatusCardComponent, PageTitleComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageTitleComponent,
    StatusCardComponent
  ],
  providers: [],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PageTitleComponent,
    StatusCardComponent
  ]
})
export class SharedModule {}
