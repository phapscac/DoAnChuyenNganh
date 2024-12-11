import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvInvoiceDetailComponent } from './inv-invoice-detail.component';

describe('InvInvoiceDetailComponent', () => {
  let component: InvInvoiceDetailComponent;
  let fixture: ComponentFixture<InvInvoiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvInvoiceDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvInvoiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
