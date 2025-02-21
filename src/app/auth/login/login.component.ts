import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User = { username: '', password: '', role: 'university' };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user).subscribe(response => {
      console.log('User logged in', response);
    });
  }
}
