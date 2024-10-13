import { Component, inject } from '@angular/core';
import { PokeService } from '../../services/poke/poke.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-pok',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table-pok.component.html',
  styleUrl: './table-pok.component.css'
})
export class TablePokComponent {

  service = inject(PokeService);

  personajes: any;

  ngOnInit() {
    this.service.getCharacter().subscribe(v => {
      this.personajes = v;
    })
  }

}
