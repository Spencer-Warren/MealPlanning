import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/modles/Meal';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class mealsComponent {
  
  meals: Array<Meal> = new Array<Meal>();

  constructor(private router: Router, private api: RESTAPIService) {
  }
  
  ngOnInit(): void {
    this.api.getMeals().subscribe((data: any) => {
      this.meals = data.body;
    });
  }

  onSelect(meal: Meal): void {
    sessionStorage.setItem('selectedmeal', JSON.stringify(meal));
    this.router.navigate(['/view-meal']);
  }

  onEdit(meal: Meal): void {
    sessionStorage.setItem('selectedmeal', JSON.stringify(meal));
    this.router.navigate(['/edit-meal']);
  }

  onDelete(meal: Meal): void {
    let shouldDelete = confirm("Are you sure you want to delete this meal?");
    if (!shouldDelete) {
      return;
    }
    this.api.deleteMeal(meal).subscribe((data: any) => {
      alert(meal.mealName + " have been deleted!")
      this.ngOnInit();
    });
  }

  createmeal(): void {
    this.router.navigate(['/create-meal']);
  }
}
