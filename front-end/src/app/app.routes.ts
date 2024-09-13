import { Routes } from '@angular/router';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { LoginComponent } from './auth/login/login.component';
import { RecuperaSenhaComponent } from './auth/recupera-senha/recupera-senha.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'recupera-senha',
        component: RecuperaSenhaComponent
    }
];
