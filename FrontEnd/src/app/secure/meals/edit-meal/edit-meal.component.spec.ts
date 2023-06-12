import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmealComponent } from './edit-meal.component';

describe('EditmealComponent', () => {
  let component: EditmealComponent;
  let fixture: ComponentFixture<EditmealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
