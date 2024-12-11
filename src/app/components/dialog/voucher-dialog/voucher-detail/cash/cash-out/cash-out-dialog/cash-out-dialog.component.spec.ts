import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashOutDialogComponent } from './cash-out-dialog.component';

describe('CashOutDialogComponent', () => {
  let component: CashOutDialogComponent;
  let fixture: ComponentFixture<CashOutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashOutDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashOutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
