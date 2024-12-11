import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptSaleShippingComponent } from './rpt-sale-shipping.component';

describe('RptSaleShippingComponent', () => {
  let component: RptSaleShippingComponent;
  let fixture: ComponentFixture<RptSaleShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RptSaleShippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptSaleShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
