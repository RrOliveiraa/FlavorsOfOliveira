import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7017/FlavorsOfOliveiraapi/Admin';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Users`);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/DeleteUser/${id}`;
    return this.http.delete<any>(url, { responseType: 'text' as 'json' }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error deleting user:', error);
        return throwError('Erro ao excluir usuário. Por favor, tente novamente mais tarde.');
      })
    );
  }
}
