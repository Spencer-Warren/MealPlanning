import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meal } from 'src/app/modles/Meal';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditmealComponent {
  mealForm!: FormGroup;
  isManual!: boolean;
  mealID!: Number;

  constructor(private restAPI: RESTAPIService, private router: Router) { }

  ngOnInit(): void {
    this.mealForm = new FormBuilder().group({
      mealName:        new FormControl <string> ('', [Validators.required, Validators.minLength(3),]),
      mealCuisine:    new FormControl <string> ('', [Validators.minLength(3)]),
      mealCookTime:    new FormControl <string> ('', [Validators.minLength(3)]),
      mealPrepTime:    new FormControl <string> ('', [Validators.minLength(3)]),
      mealDescription: new FormControl <string> ('', [Validators.minLength(3)]),
      mealSteps:       new FormControl <string> ('', [Validators.minLength(3)]),
      mealIngredients: new FormControl <string> ('', [Validators.minLength(3)]),
      mealLink:        new FormControl <string> ('', [Validators.minLength(3)]),
      });
      let meal: Meal = JSON.parse(sessionStorage.getItem('selectedmeal') || '{}');
      this.mealID = meal.mealID;
      this.mealForm.patchValue({
        mealName: meal.mealName,
        mealCuisine: meal.mealCuisine,
        mealCookTime: meal.mealCookTime,
        mealPrepTime: meal.mealPrepTime,
        mealDescription: meal.mealDescription,
        mealSteps: meal.mealSteps,
        mealIngredients: meal.mealIngredients,
        mealLink: meal.mealLink
      });
      if (!meal.mealLink) {
        this.isManual = true;
      }
  }

  onSubmit() {
    if (this.mealForm.valid) {
      let meal = this.mealForm.value
      meal.mealID = this.mealID;
      this.restAPI.updateMeal(this.mealForm.value).subscribe((data: any) => {
        alert("meal updated!");
        this.router.navigate(['/meals']);
      });
    }
    else {
      alert("Please fill out all fields!");
    }
  }

  onManualToggle() {
    this.isManual = !this.isManual;
  }
}
