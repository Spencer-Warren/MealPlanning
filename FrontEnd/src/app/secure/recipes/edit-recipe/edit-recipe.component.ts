import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/modles/Recipe';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  mealForm!: FormGroup;
  isManual!: boolean;

  constructor(private restAPI: RESTAPIService, private router: Router) { }

  ngOnInit(): void {
    this.mealForm = new FormBuilder().group({
      mealName: new FormControl <string> ('', [Validators.required, Validators.minLength(3),]),
      mealCategory: new FormControl <string> ('', [Validators.minLength(3),]),
      mealCookTime: new FormControl <string> ('', [Validators.minLength(3),]),
      mealDescription: new FormControl <string> ('', [Validators.minLength(3),]),
      mealSteps: new FormControl <string> ('', [Validators.minLength(3),]),
      mealIngredients: new FormControl <string> ('', [Validators.minLength(3),]),
      mealLink: new FormControl <string> ('', [Validators.minLength(3),]),
      });
      let meal: Recipe = JSON.parse(localStorage.getItem('meal') || '{}');
      this.mealForm.setValue(meal);
  }

  onSubmit() {
    if (this.mealForm.valid) {
      this.restAPI.updateRecipe(this.mealForm.value).subscribe((data: any) => {
        this.router.navigate(['/recipes']);
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
