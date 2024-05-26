
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Layout/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipesListComponent } from './components/recipeslist/recipeslist.component';
import { MainComponent } from './components/main/main.component';
import { MyAccountComponent } from './components/myaccount/myaccount.component';
import { AdminComponent } from './components/admin/admin.component';



const routes: Routes = [
  
  { path: '', component: MainComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recipe', component: RecipeComponent},
  { path: 'create-recipe', component: CreateRecipeComponent},
  { path:  'recipelist', component: RecipesListComponent},
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }