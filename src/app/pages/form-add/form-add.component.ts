import { Component } from '@angular/core';
import { FormAddCompComponent } from "../../components/form-add-comp/form-add-comp.component";

@Component({
  selector: 'app-form-add',
  standalone: true,
  imports: [FormAddCompComponent],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent {

}
