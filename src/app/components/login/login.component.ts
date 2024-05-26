import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  login(): void {
    this.loginService.login(this.credentials)
      .subscribe({
        next: (userData) => {
          console.log('Login successful');
          this.successMessage = 'Login efetuado com sucesso, aguarde...';

          setTimeout(() => {
            // Redirecionar para a página de MyAccount
            this.router.navigate(['/myaccount']);
          }, 3000); // Espera 3 segundos antes de redirecionar
        },
        error: (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.';
        }
      });
  }
}