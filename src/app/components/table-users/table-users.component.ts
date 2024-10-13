import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css'
})
export class TableUsersComponent {

  service = inject(UserService);

  users: any;

  ngOnInit() {
    try {
      this.service.getUsers().subscribe(v => {
        this.users = v
      })
    } catch (e) {
      alert("No se logró recuperar la información!")
    }
  }

  eliminar(id: any) {
    try {
      this.service.deleteUser(id).subscribe();
      alert("Usuario eliminado!");
      location.reload();
    } catch (e) {
      alert("No se pudo eliminar el usuario");
    }
  }

}
