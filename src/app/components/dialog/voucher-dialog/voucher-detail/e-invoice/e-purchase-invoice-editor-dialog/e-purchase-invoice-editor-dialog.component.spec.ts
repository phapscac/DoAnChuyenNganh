import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPurchaseInvoiceEditorDialogComponent } from './e-purchase-invoice-editor-dialog.component';

describe('EPurchaseInvoiceEditorDialogComponent', () => {
  let component: EPurchaseInvoiceEditorDialogComponent;
  let fixture: ComponentFixture<EPurchaseInvoiceEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EPurchaseInvoiceEditorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EPurchaseInvoiceEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
