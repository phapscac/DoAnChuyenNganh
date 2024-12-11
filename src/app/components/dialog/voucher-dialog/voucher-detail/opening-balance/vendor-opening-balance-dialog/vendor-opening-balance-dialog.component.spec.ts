import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOpeningBalanceDialogComponent } from './vendor-opening-balance-dialog.component';

describe('VendorOpeningBalanceDialogComponent', () => {
  let component: VendorOpeningBalanceDialogComponent;
  let fixture: ComponentFixture<VendorOpeningBalanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorOpeningBalanceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorOpeningBalanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
