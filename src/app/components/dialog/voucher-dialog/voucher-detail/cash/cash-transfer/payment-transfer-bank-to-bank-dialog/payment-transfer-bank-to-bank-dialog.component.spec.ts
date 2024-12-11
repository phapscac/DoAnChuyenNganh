import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransferBankToBankDialogComponent } from './payment-transfer-bank-to-bank-dialog.component';

describe('PaymentTransferBankToBankDialogComponent', () => {
  let component: PaymentTransferBankToBankDialogComponent;
  let fixture: ComponentFixture<PaymentTransferBankToBankDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTransferBankToBankDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTransferBankToBankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
