import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAdjustBankDialogComponent } from './payment-adjust-bank-dialog.component';

describe('PaymentAdjustBankDialogComponent', () => {
  let component: PaymentAdjustBankDialogComponent;
  let fixture: ComponentFixture<PaymentAdjustBankDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentAdjustBankDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAdjustBankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
