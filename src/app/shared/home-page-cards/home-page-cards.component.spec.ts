import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCardsComponent } from './home-page-cards.component';

describe('HomePageCardsComponent', () => {
  let component: HomePageCardsComponent;
  let fixture: ComponentFixture<HomePageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
