import { Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { Error404Component } from './pages/error404/error404.component';
import { FormAddComponent } from './pages/form-add/form-add.component';
import { FormEditComponent } from './pages/form-edit/form-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListApiComponent } from './pages/list-api/list-api.component';
import { ApiInfoComponent } from './pages/api-info/api-info.component';
import { apiProtectGuard } from './guards/api-protect.guard';

export const routes: Routes = [
    { path: '', component: ListUsersComponent },
    { path: 'add', component: FormAddComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistroComponent },
    { path: 'api', component: ListApiComponent, canActivate: [apiProtectGuard] },

    { path: 'info-api/:idApi', component: ApiInfoComponent },
    { path: 'edit/:idUser', component: FormEditComponent },

    { path: '**', component: Error404Component }
];
