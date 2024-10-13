import { Component } from '@angular/core';
import { TableUsersComponent } from "../../components/table-users/table-users.component";

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [TableUsersComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

}
