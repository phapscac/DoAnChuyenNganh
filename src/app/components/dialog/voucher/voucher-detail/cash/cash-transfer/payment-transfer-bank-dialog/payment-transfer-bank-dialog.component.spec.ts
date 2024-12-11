import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransferBankDialogComponent } from './payment-transfer-bank-dialog.component';

describe('PaymentTransferBankDialogComponent', () => {
  let component: PaymentTransferBankDialogComponent;
  let fixture: ComponentFixture<PaymentTransferBankDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTransferBankDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentTransferBankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
