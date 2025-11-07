import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarenkorbService } from './warenkorb-service';

describe('WarenkorbService', () => {
  let component: WarenkorbService;
  let fixture: ComponentFixture<WarenkorbService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarenkorbService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarenkorbService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
