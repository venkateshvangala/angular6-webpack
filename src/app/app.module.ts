import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ModalModule.forRoot(),
    BootstrapModalModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ClickOutsideModule
  ],
  providers: []
})
export class AppModule {}