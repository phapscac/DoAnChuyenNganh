import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoiceDialogComponent } from './purchase-invoice-dialog.component';

describe('PurchaseInvoiceDialogComponent', () => {
  let component: PurchaseInvoiceDialogComponent;
  let fixture: ComponentFixture<PurchaseInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseInvoiceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
