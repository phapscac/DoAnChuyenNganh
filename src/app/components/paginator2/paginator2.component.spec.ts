import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPopupComponent } from './paginator2.component';

describe('PaginatorComponent', () => {
  let component: PaginatorPopupComponent;
  let fixture: ComponentFixture<PaginatorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
