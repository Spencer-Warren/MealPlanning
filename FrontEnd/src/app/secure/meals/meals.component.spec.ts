import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mealsComponent } from './meals.component';

describe('mealsComponent', () => {
  let component: mealsComponent;
  let fixture: ComponentFixture<mealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ mealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(mealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
