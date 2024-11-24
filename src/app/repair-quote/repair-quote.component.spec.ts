import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairQuoteComponent } from './repair-quote.component';

describe('RepairQuoteComponent', () => {
  let component: RepairQuoteComponent;
  let fixture: ComponentFixture<RepairQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepairQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
