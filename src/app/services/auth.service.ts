import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/students';

  login(user: User): Observable<Student> {
    return from(
      fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(async response => {
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
          }

          return response.json();
        })
        .catch(error => {
          console.error('Error en login:', error);
          throw error;
        })
    );
  }

  logout(user: string): Observable<Student> {
    return from(
      fetch(`${this.apiUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .catch(error => {
          console.error('Error en logout:', error);
          throw error;
        })
    );
  }
}
