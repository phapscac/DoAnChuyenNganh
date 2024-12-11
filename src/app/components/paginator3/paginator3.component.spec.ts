import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginator3Component } from './paginator3.component';

describe('Paginator3Component', () => {
  let component: Paginator3Component;
  let fixture: ComponentFixture<Paginator3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paginator3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paginator3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
