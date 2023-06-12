import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmealComponent } from './view-meal.component';

describe('ViewmealComponent', () => {
  let component: ViewmealComponent;
  let fixture: ComponentFixture<ViewmealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
