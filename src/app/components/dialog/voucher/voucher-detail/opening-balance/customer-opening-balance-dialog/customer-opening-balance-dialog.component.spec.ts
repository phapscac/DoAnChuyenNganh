import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOpeningBalanceDialogComponent } from './customer-opening-balance-dialog.component';

describe('CustomerOpeningBalanceDialogComponent', () => {
  let component: CustomerOpeningBalanceDialogComponent;
  let fixture: ComponentFixture<CustomerOpeningBalanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerOpeningBalanceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOpeningBalanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
