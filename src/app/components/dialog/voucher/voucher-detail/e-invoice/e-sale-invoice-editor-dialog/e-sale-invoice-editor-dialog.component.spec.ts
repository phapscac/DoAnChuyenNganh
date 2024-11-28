import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsaleInvoiceEditorDialogComponent } from './e-sale-invoice-editor-dialog.component';

describe('EsaleInvoiceEditorDialogComponent', () => {
  let component: EsaleInvoiceEditorDialogComponent;
  let fixture: ComponentFixture<EsaleInvoiceEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsaleInvoiceEditorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsaleInvoiceEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
