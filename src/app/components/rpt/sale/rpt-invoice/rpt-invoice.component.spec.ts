import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptInvoiceComponent } from './rpt-invoice.component';

describe('RptInvoiceComponent', () => {
  let component: RptInvoiceComponent;
  let fixture: ComponentFixture<RptInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RptInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
