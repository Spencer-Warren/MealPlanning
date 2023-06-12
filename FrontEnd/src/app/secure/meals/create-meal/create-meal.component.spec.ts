import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemealComponent } from './create-meal.component';

describe('CreatemealComponent', () => {
  let component: CreatemealComponent;
  let fixture: ComponentFixture<CreatemealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
