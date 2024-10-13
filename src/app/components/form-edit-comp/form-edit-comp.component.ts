import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-form-edit-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-edit-comp.component.html',
  styleUrl: './form-edit-comp.component.css'
})
export class FormEditCompComponent {

  ruta = inject(ActivatedRoute);
  service = inject(UserService);
  router = inject(Router);

  id: any;
  nombre: any;
  email: any;
  anio: any;
  direccion: any;
  password: any;

  ngOnInit() {
    try {
      this.ruta.params.subscribe(p => {
        this.service.getUserById(p['idUser']).subscribe(v => {
          this.id = v.id
          this.nombre = v.nombre
          this.email = v.email
          this.anio = v.anio
          this.direccion = v.direccion
          this.password = v.password
        });
      });
    } catch (e) {
      alert("No se pudo obtener los valores del usuario seleccionado");
      this.router.navigate(['']);
    }
  }

  editar(form: any) {
    try {
      this.service.putUser(form.value).subscribe();
      alert("Usuario editado correctamente!");
      this.router.navigate(['']);
    } catch (e) {
      alert("No se pudo editar el usuario! Intentelo más tarde");
    }
  }
}
