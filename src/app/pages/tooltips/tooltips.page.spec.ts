import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsPage } from './tooltips.page';

describe('TooltipsPage', () => {
  let component: TooltipsPage;
  let fixture: ComponentFixture<TooltipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
