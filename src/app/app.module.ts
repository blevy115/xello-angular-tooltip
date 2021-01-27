import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { tooltipReducer }  from './reducers/tooltip.reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipButtonComponent } from './components/tooltip-button/tooltip-button.component';
import { TooltipsPage } from './pages/tooltips/tooltips.page';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TooltipButtonComponent,
    TooltipsPage,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ tooltip: tooltipReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
