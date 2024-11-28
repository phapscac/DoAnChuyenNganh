import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVendorPaymentDialogComponent } from './customer-vendor-payment-dialog.component';

describe('CustomerVendorPaymentDialogComponent', () => {
  let component: CustomerVendorPaymentDialogComponent;
  let fixture: ComponentFixture<CustomerVendorPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerVendorPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerVendorPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
