import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  user!: User;

  constructor(private authService: AuthService, 
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let user: User = {
        email: this.loginForm.get('username')?.value, 
        password: this.loginForm.get('password')?.value,
        role: ''
      }
  
      this.authService.login(user).subscribe({
        next: response => {
          if (response.role?.toLowerCase() === 'hospital') {
            this.router.navigate(['/hospital/lista']);
          } else if (response.role?.toLowerCase() === 'universidad') {
            this.router.navigate(['/universidad/registrar']);
          }
        },
        error: err => {
          alert('Usuario o contraseña invalida');
        }
      });
    }
  }
}
