import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInOutSouringDialogComponent } from './cash-in-out-souring-dialog.component';

describe('CashInOutSouringDialogComponent', () => {
  let component: CashInOutSouringDialogComponent;
  let fixture: ComponentFixture<CashInOutSouringDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashInOutSouringDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashInOutSouringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
