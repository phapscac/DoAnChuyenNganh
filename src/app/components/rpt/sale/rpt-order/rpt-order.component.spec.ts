import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptOrderComponent } from './rpt-order.component';

describe('RptOrderComponent', () => {
  let component: RptOrderComponent;
  let fixture: ComponentFixture<RptOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RptOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
