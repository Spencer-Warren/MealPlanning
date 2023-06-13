import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreatemealComponent {
  mealForm!: FormGroup;
  isManual!: boolean;

  constructor(private restAPI: RESTAPIService, private router: Router) { }

  ngOnInit(): void {
    this.mealForm = new FormBuilder().group({
      mealName: new FormControl <string> ('', [Validators.required, Validators.minLength(3),]),
      mealCuisine: new FormControl <string> ('', [Validators.minLength(3),]),
      mealCookTime: new FormControl <string> ('', [Validators.minLength(3),]),
      mealPrepTime: new FormControl <string> ('', [Validators.minLength(3),]),
      mealDescription: new FormControl <string> ('', [Validators.minLength(3),]),
      mealSteps: new FormControl <string> ('', [Validators.minLength(3),]),
      mealIngredients: new FormControl <string> ('', [Validators.minLength(3),]),
      mealLink: new FormControl <string> ('', [Validators.minLength(3),]),
      });
  }

  onSubmit() {
    if (this.mealForm.valid) {
      this.restAPI.createMeal(this.mealForm.value).subscribe((data: any) => {
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
