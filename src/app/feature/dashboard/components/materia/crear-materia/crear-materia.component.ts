import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from '../shared/service/materia.service';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  public materiaForm: FormGroup;

  constructor(protected service: MateriaService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.materiaForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }

  public crearMateria() {
    console.log(this.materiaForm.value);
    this.service.crear(this.materiaForm.value).subscribe();
  }

}
