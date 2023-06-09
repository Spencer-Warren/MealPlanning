import { Component } from '@angular/core';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {

  constructor() { }

  get selectedRecipe(): any {
    return JSON.parse(sessionStorage.getItem('selectedRecipe') || '{}');
  }

}
