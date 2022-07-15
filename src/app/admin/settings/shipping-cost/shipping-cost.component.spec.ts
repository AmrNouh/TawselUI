import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCostComponent } from './shipping-cost.component';

describe('ShippingCostComponent', () => {
  let component: ShippingCostComponent;
  let fixture: ComponentFixture<ShippingCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
