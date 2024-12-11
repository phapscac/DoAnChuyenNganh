import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptReturnOrderComponent } from './rpt-return-order.component';

describe('RptReturnOrderComponent', () => {
  let component: RptReturnOrderComponent;
  let fixture: ComponentFixture<RptReturnOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RptReturnOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptReturnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
