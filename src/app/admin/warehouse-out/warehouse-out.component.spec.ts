import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseOutComponent } from './warehouse-out.component';

describe('WarehouseOutComponent', () => {
  let component: WarehouseOutComponent;
  let fixture: ComponentFixture<WarehouseOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
