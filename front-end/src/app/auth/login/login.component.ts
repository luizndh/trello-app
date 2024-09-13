import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(authService: AuthService, private router: Router) {}

    email: string = ''
    password: string = ''

    login () {
        // Realizar lógica de fazer login
        this.router.navigate(['/home'])
    }

    cadastro() {
        this.router.navigate(['/cadastro'])
    }

    esqueciSenha() {
        this.router.navigate(['/recupera-senha'])
    }
}
