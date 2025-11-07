import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotografie } from './fotografie';

describe('Fotografie', () => {
  let component: Fotografie;
  let fixture: ComponentFixture<Fotografie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fotografie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fotografie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
