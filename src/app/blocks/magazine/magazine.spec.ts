import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Magazine } from './magazine';

describe('Magazine', () => {
  let component: Magazine;
  let fixture: ComponentFixture<Magazine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Magazine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Magazine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
