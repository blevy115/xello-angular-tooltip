import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipButtonComponent } from './components/tooltip-button/tooltip-button.component';
import { TooltipsPage } from './pages/tooltips/tooltips.page';

@NgModule({
  declarations: [
    AppComponent,
    TooltipButtonComponent,
    TooltipsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
