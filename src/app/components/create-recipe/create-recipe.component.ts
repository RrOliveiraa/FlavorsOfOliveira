import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ingredients: this.fb.array([
        this.fb.group({
          name: ['', [Validators.required]],
          quantity: ['', [Validators.required]],
          unit: ['', [Validators.required]]
        })
      ])
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      unit: ['', [Validators.required]]
    }));
  }

  CreateRecipe(): void {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = this.recipeForm.value;
      this.recipeService.CreateRecipe(newRecipe).subscribe({
        next: (recipe) => {
          console.log('Recipe created successfully:', recipe);
          // Redirecionar ou atualizar a lista de receitas conforme necessário
        },
        error: (error) => {
          this.errorMessage = 'Erro ao criar receita';
          console.error('Erro ao criar receita:', error);
        }
      });
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios';
    }
  }
}
