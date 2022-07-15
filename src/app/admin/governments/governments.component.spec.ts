import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentsComponent } from './governments.component';

describe('GovernmentsComponent', () => {
  let component: GovernmentsComponent;
  let fixture: ComponentFixture<GovernmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
