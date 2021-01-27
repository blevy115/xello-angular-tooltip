import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TooltipActions from 'src/app/actions/tooltip.actions';
import  { Tooltip } from '../../models/tooltip.model';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.page.html',
  styleUrls: ['./tooltips.page.sass']
})
export class TooltipsPage implements OnInit {
  
  tooltips: Observable<Tooltip[]>
  classNamesToClick: string[] = ['tooltip-text-top', 'tooltip-text-bottom', 'tooltip-button']
  
  // Determines if Mouse click is in or outside tooltips
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
      let clickedElement = (event.target as Element);
      if (!this.classNamesToClick.includes(clickedElement.className)){
        this.toggleTooltips(-1); // close all tooltips
      }
  }

  // Close tooltips on Escape key press
  @HostListener('document:keydown.escape', ['$event']) 
  onKeydownHandler(event: KeyboardEvent) {
    this.toggleTooltips(-1);
  }

  constructor(private store: Store<AppState>) {
    this.tooltips = store.select('tooltip')
   }

  ngOnInit(): void {
  }

  public toggleTooltips(tooltipId : number){
    this.store.dispatch(new TooltipActions.TooltipToggle(tooltipId))
  }
}
