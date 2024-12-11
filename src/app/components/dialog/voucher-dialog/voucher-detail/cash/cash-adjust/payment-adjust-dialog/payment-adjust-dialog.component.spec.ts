import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAdjustDialogComponent } from './payment-adjust-dialog.component';

describe('PaymentAdjustDialogComponent', () => {
  let component: PaymentAdjustDialogComponent;
  let fixture: ComponentFixture<PaymentAdjustDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentAdjustDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAdjustDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
