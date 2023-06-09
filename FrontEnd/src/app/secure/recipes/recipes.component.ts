import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/modles/Recipe';
import { RESTAPIService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  
  recipes: Array<Recipe> = new Array<Recipe>();

  constructor(private router: Router, private api: RESTAPIService) {
  }
  
  ngOnInit(): void {
    this.api.getRecipes().subscribe((data: any) => {
      this.recipes = data.body;
    });
  }

  onSelect(recipe: Recipe): void {
    sessionStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    this.router.navigate(['/view-recipe']);
  }

  onEdit(recipe: Recipe): void {
    sessionStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    this.router.navigate(['/edit-recipe']);
  }

  onDelete(recipe: Recipe): void {
    let shouldDelete = confirm("Are you sure you want to delete this recipe?");
    if (!shouldDelete) {
      return;
    }
    this.api.deleteRecipe(recipe).subscribe((data: any) => {
      alert(recipe.mealName + " have been deleted!")
    });
  }

  createRecipe(): void {
    this.router.navigate(['/create-recipe']);
  }
}
