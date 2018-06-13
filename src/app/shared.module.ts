import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent, SidebarComponent, StatusCardComponent, FileUploadComponent, PageTitleComponent, PanelTitleComponent, CompanyInfoTileComponent, PartnersCardComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageTitleComponent,
    PanelTitleComponent,
    StatusCardComponent,
    CompanyInfoTileComponent,
    PartnersCardComponent,
    FileUploadComponent
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
    PanelTitleComponent,
    StatusCardComponent,
    CompanyInfoTileComponent,
    PartnersCardComponent,
    FileUploadComponent
  ]
})
export class SharedModule {}
