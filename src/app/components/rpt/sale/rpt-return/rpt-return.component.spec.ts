import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptReturnComponent } from './rpt-return.component';

describe('RptReturnComponent', () => {
  let component: RptReturnComponent;
  let fixture: ComponentFixture<RptReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RptReturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
