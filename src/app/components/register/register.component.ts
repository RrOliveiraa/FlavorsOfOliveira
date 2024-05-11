import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy { // Adicionado o OnDestroysrc\app\services\register.service.ts
  registerForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
    this.clearForm(); // Chamada do método clearForm
  }

  ngOnDestroy() {
    this.clearPage(); // Chamada do método clearPage
  }

  clearForm() {
    this.registerForm.reset();
  }

  clearPage() {
    const additionalContent = document.getElementById('additional-content');
    if (additionalContent) {
      additionalContent.innerHTML = '';
    }
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.registerService.registrarUsuario(userData).subscribe(
        (response) => {
          console.log('Usuário registrado com sucesso:', response);
          // Redirecionar para outra página após o registro bem-sucedido, se necessário
        },
        (error) => {
          console.error('Erro ao registrar usuário:', error);
          // Tratar erros de forma adequada (por exemplo, exibir uma mensagem de erro para o usuário)
        }
      );
    }
  }
}