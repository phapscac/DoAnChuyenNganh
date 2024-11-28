import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReturnDialogComponent } from './sale-return-dialog.component';

describe('SaleReturnDialogComponent', () => {
  let component: SaleReturnDialogComponent;
  let fixture: ComponentFixture<SaleReturnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleReturnDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleReturnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
