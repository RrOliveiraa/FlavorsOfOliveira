import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyAccountComponent implements OnInit {
  userInfo: any;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (data) => {
        this.userInfo = data;
        this.error = null;
      },
      error: (err) => {
        console.error('Error fetching user info:', err);
        if (err.status === 401) {
          this.error = 'Você não está autenticado. Por favor, faça login.';
        } else {
          this.error = 'Erro ao carregar informações do usuário.';
        }
      }
    });
  }
}