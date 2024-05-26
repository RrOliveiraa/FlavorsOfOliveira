import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private router: Router) {}

  goToRegisterPage() {
    // Navegar para a rota de registro
    this.router.navigate(['/register']);

    // Ocultar o conteúdo da Home
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
