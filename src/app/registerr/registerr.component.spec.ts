import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrComponent } from './registerr.component';

describe('RegisterrComponent', () => {
  let component: RegisterrComponent;
  let fixture: ComponentFixture<RegisterrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
