import { Component } from '@angular/core';
import { Meal } from 'src/app/modles/Meal';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.css']
})
export class ViewmealComponent {

  constructor() { }

  get selectedmeal(): Meal {
    return JSON.parse(sessionStorage.getItem('selectedmeal') || '{}');
  }

}
