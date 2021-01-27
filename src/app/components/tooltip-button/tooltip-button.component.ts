import { Component, Input, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Tooltip } from './../../models/tooltip.model';

@Component({
  selector: 'app-tooltip-button',
  templateUrl: './tooltip-button.component.html',
  styleUrls: ['./tooltip-button.component.sass']
})
export class TooltipButtonComponent implements OnInit {

  @Input() tooltip: Tooltip;
  @Output() toggleTooltips = new EventEmitter<number>();

  @ViewChild('tooltipButton', {static: false}) private tooltipButton: ElementRef<HTMLDivElement>;
  @ViewChild('tooltipText', {static: false}) private tooltipText: ElementRef<HTMLDivElement>;

  tooltipOnTop: boolean = true;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.tooltipButton && this.tooltipText){
      const rect = this.tooltipButton.nativeElement.getBoundingClientRect();
      const tootlTipHeight = this.tooltipText.nativeElement.offsetHeight + 10 // height of tooltip Text Element + distance bewteen button and tooltip
      this.tooltipOnTop = rect.top > tootlTipHeight;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  public toggleTooltip(): void{
    this.toggleTooltips.emit(this.tooltip.id);
  };

}
