import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  service = inject(UserService);
  router = inject(Router);

  email: any;
  password: any;

  ingresar(form: any) {
    let formValues = form.value;
    try {
      this.service.getUsers().subscribe(v =>{
        v.forEach((element: {email: string, password: string}) => {
          if (formValues.email == element.email && formValues.password == element.password) {
            alert("Bienvenido!");
            sessionStorage.setItem('login', 'true');
            location.reload();
            this.router.navigate(['']);
            return;
          }
        });
      });
    } catch (e) {
      alert("No se pudieron recuperar los usuarios!");
    }
  }

}
