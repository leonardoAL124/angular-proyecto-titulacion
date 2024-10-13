import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-form-add-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-add-comp.component.html',
  styleUrl: './form-add-comp.component.css'
})
export class FormAddCompComponent {

  service = inject(UserService);

  id: any;
  nombre: any;
  email: any;
  anio: any;
  direccion: any;
  password: any;

  guardar(form: any) {
    try {
      this.service.postUser(form.value).subscribe();
      alert("Usuario guardado!");
      this.limpiar();
    } catch (e) {
      alert("No se pudo guardar el usuario! Intentelo más tarde");
    }
  }

  limpiar() {
    this.id = ""
    this.nombre = ""
    this.email = ""
    this.anio = ""
    this.direccion = ""
    this.password = ""
  }

}
