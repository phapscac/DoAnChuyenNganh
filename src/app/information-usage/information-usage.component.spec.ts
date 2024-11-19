import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationUsageComponent } from './information-usage.component';

describe('InformationUsageComponent', () => {
  let component: InformationUsageComponent;
  let fixture: ComponentFixture<InformationUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
