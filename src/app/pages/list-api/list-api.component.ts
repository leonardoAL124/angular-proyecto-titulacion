import { Component, inject } from '@angular/core';
import { TablePokComponent } from "../../components/table-pok/table-pok.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-api',
  standalone: true,
  imports: [TablePokComponent],
  templateUrl: './list-api.component.html',
  styleUrl: './list-api.component.css'
})
export class ListApiComponent {

  router = inject(Router);

  cerrar() {
    sessionStorage.setItem('login', 'false');
    location.reload();
    this.router.navigate(['']);
  }
}
