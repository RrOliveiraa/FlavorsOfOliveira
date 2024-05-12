import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  recipeForm!: FormGroup; // Definindo a propriedade recipeForm

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializando o FormGroup
    this.recipeForm = this.fb.group({
      // Definindo os campos e validadores
      nome: ['', [Validators.required]],
      tempo_de_preparo: ['', [Validators.required]],
      rendimento: ['', [Validators.required]],
      avaliacao: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      ingredientes: this.fb.group({
        categoria: ['', [Validators.required]],
      }),
      modo_preparo: this.fb.group({
        categoria: ['', [Validators.required]],
        itens: ['', [Validators.required]],
      }),
    });
  }

  // Você pode adicionar métodos adicionais aqui, como por exemplo o método para criar a receita
  createRecipe(): void {
    // Lógica para criar a receita
  }
}