import { Component } from '@angular/core';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.css']
})
export class ViewmealComponent {

  constructor() { }

  get selectedmeal(): any {
    return JSON.parse(sessionStorage.getItem('selectedmeal') || '{}');
  }

}
