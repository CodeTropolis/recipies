import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
     new Recipe('Recipe A', 'A test recipe', 'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg'),
  ];

  // Interface
  // recipes: Recipe[] = [{name: 'Foo', 'Bar', 'someImagePath'}]
}
