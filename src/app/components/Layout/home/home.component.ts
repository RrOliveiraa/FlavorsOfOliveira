import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Inicialmente, mostraremos o conteúdo da Home
  showContent: boolean = true;

  constructor(private router: Router) { }

  goToRegisterPage() {
    // Navegar para a rota de registro
    this.router.navigate(['/register']);

    // Ocultar o conteúdo da Home
    this.showContent = false;
  }

  goToLoginPage() {

  this.router.navigate(['/login']);


  this.showContent = false;

  }

goToRecipePage(){

  this.router.navigate(['/recipe']);

  this.showContent = false;


}

}