import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://media.self.com/photos/596e9934f687ae48918a57d0/4:3/w_426/Chipotle-tacos.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://media.self.com/photos/596e9934f687ae48918a57d0/4:3/w_426/Chipotle-tacos.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
