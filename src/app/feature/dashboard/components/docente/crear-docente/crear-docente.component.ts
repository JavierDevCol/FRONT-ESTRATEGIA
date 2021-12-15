import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DocenteService } from '../shared/service/docente.service';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit {

  public docenteForm: FormGroup;

  constructor(protected service: DocenteService, private fb: FormBuilder, private navegacion: Router) { }

  ngOnInit(): void {

    this.docenteForm = this.fb.group({
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required ],
      correo: ['', Validators.required ],
      contrasena: ['', Validators.required ],
      enabled: [true],
      id: [0]
    })
  }

  public crearDocente() {
    console.log(this.docenteForm.value);
    this.service.crear(this.docenteForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Docente  "' + this.docenteForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo',
        });
        this.navegacion.navigate(['dashboard', 'docente','listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.docenteForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo',
        });
      }
    );
  }
}
