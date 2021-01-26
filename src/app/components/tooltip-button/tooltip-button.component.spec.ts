import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipButtonComponent } from './tooltip-button.component';
import { Tooltip } from '../../interfaces/tooltip.interface';


describe('TooltipButtonComponent', () => {
  let component: TooltipButtonComponent;
  let fixture: ComponentFixture<TooltipButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipButtonComponent);
    component = fixture.componentInstance;
    let testTooltip: Tooltip = {id: 0, buttonText:'Test Button', tooltipText:'Test Tooltip', open: false};
    component.tooltip = testTooltip;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
