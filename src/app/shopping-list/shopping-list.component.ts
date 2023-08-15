import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    {name: 'Eggs', amount: 5},
    {name: 'Tomatoes', amount: 2}
  ];

  constructor(){}

  ngOnInit(): void {}

}
