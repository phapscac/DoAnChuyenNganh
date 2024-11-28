import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePaymentDialogComponent } from './employee-payment-dialog.component';

describe('EmployeePaymentDialogComponent', () => {
  let component: EmployeePaymentDialogComponent;
  let fixture: ComponentFixture<EmployeePaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeePaymentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
