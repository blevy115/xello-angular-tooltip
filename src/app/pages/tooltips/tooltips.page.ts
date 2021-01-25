import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.page.html',
  styleUrls: ['./tooltips.page.sass']
})
export class TooltipsPage implements OnInit {
  
  tooltips: any[] = [ // Sets Tooltip info
    {id: 0, buttonText:'Button A', tooltipText:'Tooltip for Button A', open: false}, 
    {id: 1, buttonText:'Button B', tooltipText:'Tooltip for Button B', open: false}
  ];

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

  constructor() { }

  ngOnInit(): void {
  }

  public toggleTooltips(tooltipId : number){
    this.tooltips.map(tooltip => {
      if (tooltip.id == tooltipId) {
        tooltip.open = !tooltip.open;
      } else {
        tooltip.open = false;
      }
    });
  }
}
