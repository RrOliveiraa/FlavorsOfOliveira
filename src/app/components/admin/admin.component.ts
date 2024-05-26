import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  message: string | null = null;
  error: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.error = null;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = 'Erro ao carregar usuários.';
      }
    });
  }

  deleteUser(id: number): void {
    this.adminService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
        this.message = `User with ID ${id} deleted successfully.`;
        this.error = null;
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.error = 'Erro ao excluir usuário.';
      }
    });
  }
}