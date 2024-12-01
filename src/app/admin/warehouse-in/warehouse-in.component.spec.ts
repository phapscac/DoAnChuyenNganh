import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseInComponent } from './warehouse-in.component';

describe('WarehouseInComponent', () => {
  let component: WarehouseInComponent;
  let fixture: ComponentFixture<WarehouseInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
