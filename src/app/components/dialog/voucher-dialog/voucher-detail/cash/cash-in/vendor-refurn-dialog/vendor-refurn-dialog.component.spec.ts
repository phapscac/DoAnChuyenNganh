import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRefurnDialogComponent } from './vendor-refurn-dialog.component';

describe('VendorRefurnDialogComponent', () => {
  let component: VendorRefurnDialogComponent;
  let fixture: ComponentFixture<VendorRefurnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorRefurnDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRefurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
