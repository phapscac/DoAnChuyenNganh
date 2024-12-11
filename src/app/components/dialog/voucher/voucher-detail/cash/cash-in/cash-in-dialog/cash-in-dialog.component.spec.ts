import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInDialogComponent } from './cash-in-dialog.component';

describe('CashInDialogComponent', () => {
  let component: CashInDialogComponent;
  let fixture: ComponentFixture<CashInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashInDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
