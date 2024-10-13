import { Component, inject } from '@angular/core';
import { PokeService } from '../../services/poke/poke.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-info',
  standalone: true,
  imports: [],
  templateUrl: './api-info.component.html',
  styleUrl: './api-info.component.css'
})
export class ApiInfoComponent {

  service = inject(PokeService);
  ruta = inject(ActivatedRoute);

  name: any;
  img: any;
  first: any;
  born: any;
  position: any;
  etnia: any;

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.service.getCharacterById(p['idApi']).subscribe(v => {
        this.name = v.name
        this.img = v.image
        this.first = v.chronologicalInformation.firstAppearance
        this.born = v.bio.born
        this.position = v.politicalInformation.position
        this.etnia = v.bio.ethnicity
      });
    });
  }
}
