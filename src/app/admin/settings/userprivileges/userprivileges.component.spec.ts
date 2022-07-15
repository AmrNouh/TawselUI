import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprivilegesComponent } from './userprivileges.component';

describe('UserprivilegesComponent', () => {
  let component: UserprivilegesComponent;
  let fixture: ComponentFixture<UserprivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprivilegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
