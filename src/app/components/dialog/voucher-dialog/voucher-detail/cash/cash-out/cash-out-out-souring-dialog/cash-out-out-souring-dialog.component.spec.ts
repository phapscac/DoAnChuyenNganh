import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashOutOutSouringDialogComponent } from './cash-out-out-souring-dialog.component';

describe('CashOutOutSouringDialogComponent', () => {
  let component: CashOutOutSouringDialogComponent;
  let fixture: ComponentFixture<CashOutOutSouringDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashOutOutSouringDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashOutOutSouringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
