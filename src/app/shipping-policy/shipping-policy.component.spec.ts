import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPolicyComponent } from './shipping-policy.component';

describe('ShippingPolicyComponent', () => {
  let component: ShippingPolicyComponent;
  let fixture: ComponentFixture<ShippingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
