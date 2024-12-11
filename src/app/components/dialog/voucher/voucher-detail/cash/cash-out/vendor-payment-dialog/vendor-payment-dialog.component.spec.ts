import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPaymentDialogComponent } from './vendor-payment-dialog.component';

describe('VendorPaymentDialogComponent', () => {
  let component: VendorPaymentDialogComponent;
  let fixture: ComponentFixture<VendorPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
