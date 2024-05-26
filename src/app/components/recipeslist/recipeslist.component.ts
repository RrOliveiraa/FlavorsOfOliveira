import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  errorMessage: string | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        console.log(this.recipes); // Adicione isso para verificar os dados no console
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar receitas';
        console.error('Erro ao buscar receitas:', error);
      }
    });
  }
}
