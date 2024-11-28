import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvInvoiceDetailStockOutDialogComponent } from './inv-invoice-detail-stock-out-dialog.component';

describe('InvInvoiceDetailStockOutDialogComponent', () => {
  let component: InvInvoiceDetailStockOutDialogComponent;
  let fixture: ComponentFixture<InvInvoiceDetailStockOutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvInvoiceDetailStockOutDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvInvoiceDetailStockOutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
