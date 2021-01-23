import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.page.html',
  styleUrls: ['./tooltips.page.sass']
})
export class TooltipsPage implements OnInit {
  
  tooltips: any[] = [ // Sets Tooltip info
    {id: 0, buttonText:'Button 1', tooltipText:'Tooltip for Button 1', open: false}, 
    {id: 1, buttonText:'Button 2', tooltipText:'Tooltip for Button 2', open: false}
  ];

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
