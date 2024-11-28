import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtAssigmentDialogComponent } from './debt-assigment-dialog.component';

describe('DebtAssigmentDialogComponent', () => {
  let component: DebtAssigmentDialogComponent;
  let fixture: ComponentFixture<DebtAssigmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebtAssigmentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtAssigmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
