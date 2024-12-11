import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRefurnDialogComponent } from './customer-refurn-dialog.component';

describe('CustomerRefurnDialogComponent', () => {
  let component: CustomerRefurnDialogComponent;
  let fixture: ComponentFixture<CustomerRefurnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerRefurnDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRefurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
