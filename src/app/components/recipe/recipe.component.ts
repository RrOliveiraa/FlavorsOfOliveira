import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  constructor(private router: Router) {}

  goToCreateRecipePage() {
    // Redireciona para a página Create Recipe
    this.router.navigate(['/create-recipe']);
  }
  
}
