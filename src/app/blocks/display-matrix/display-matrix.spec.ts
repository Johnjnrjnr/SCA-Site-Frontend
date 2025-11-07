import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMatrix } from './display-matrix';

describe('DisplayMatrix', () => {
  let component: DisplayMatrix;
  let fixture: ComponentFixture<DisplayMatrix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayMatrix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMatrix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
