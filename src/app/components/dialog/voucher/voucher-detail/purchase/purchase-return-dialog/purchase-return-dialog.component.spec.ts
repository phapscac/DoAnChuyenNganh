import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnDialogComponent } from './purchase-return-dialog.component';

describe('PurchaseReturnDialogComponent', () => {
  let component: PurchaseReturnDialogComponent;
  let fixture: ComponentFixture<PurchaseReturnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseReturnDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
