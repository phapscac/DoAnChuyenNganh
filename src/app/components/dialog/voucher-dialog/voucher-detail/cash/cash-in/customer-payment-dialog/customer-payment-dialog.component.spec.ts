import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentDialogComponent } from './customer-payment-dialog.component';

describe('CustomerPaymentDialogComponent', () => {
  let component: CustomerPaymentDialogComponent;
  let fixture: ComponentFixture<CustomerPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
