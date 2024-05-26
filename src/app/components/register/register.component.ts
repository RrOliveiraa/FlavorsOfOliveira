import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }

  ngOnDestroy(): void {
    this.clearPage();
  }

  clearPage(): void {
    const additionalContent = document.getElementById('additional-content');
    if (additionalContent) {
      additionalContent.innerHTML = '';
    }
  }

  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.registerService.register(userData).subscribe(
        (response) => {
          console.log('Usuário registrado com sucesso:', response);
          this.successMessage = 'Usuário registrado com sucesso!';
          this.clearForm();
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000); // Redireciona após 3 segundos
        },
        (error) => {
          console.error('Erro ao registrar usuário:', error);
          this.errorMessage = 'Erro ao registrar usuário. Por favor, tente novamente.';
        }
      );
    }
  }

  private clearForm(): void {
    this.registerForm.reset();
  }
}