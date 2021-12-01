import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MateriaService } from '../shared/service/materia.service';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {

  public materiaForm: FormGroup;

  constructor(protected service: MateriaService, private fb: FormBuilder, private navegacion: Router) { }

  ngOnInit(): void {

    this.materiaForm = this.fb.group({
      nombre: ['', Validators.required ]
    })
  }


  public crearMateria() {
    console.log(this.materiaForm.value);
    this.service.crear(this.materiaForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Materia  "' + this.materiaForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo',
        });
        this.navegacion.navigate(['dashboard', 'materia','listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.materiaForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo',
        });
      }
    );
  }

}
