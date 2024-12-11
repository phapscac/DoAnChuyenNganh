import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderDialogComponent } from './sale-order-dialog.component';

describe('SaleOrderDialogComponent', () => {
  let component: SaleOrderDialogComponent;
  let fixture: ComponentFixture<SaleOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleOrderDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
