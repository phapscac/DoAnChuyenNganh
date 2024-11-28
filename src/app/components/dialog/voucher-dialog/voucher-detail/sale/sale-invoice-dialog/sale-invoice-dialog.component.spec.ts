import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInvoiceDialogComponent } from './sale-invoice-dialog.component';

describe('SaleInvoiceDialogComponent', () => {
  let component: SaleInvoiceDialogComponent;
  let fixture: ComponentFixture<SaleInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleInvoiceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
