import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.sass']
})
export class TooltipButtonComponent implements OnInit {

  @Input() tooltip: any;
  @Output() toggleTooltips = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleTooltip(): void{
    this.toggleTooltips.emit(this.tooltip.id);
  };

}
