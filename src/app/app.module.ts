import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Layout/home/home.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipesListComponent } from './components/recipeslist/recipeslist.component';
import { MyAccountComponent } from './components/myaccount/myaccount.component';
import { AdminComponent } from './components/admin/admin.component';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent,
        RecipeComponent,
        CreateRecipeComponent,
        RecipesListComponent,
        MyAccountComponent,
        AdminComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
        
    ]
})
  export class AppModule {}