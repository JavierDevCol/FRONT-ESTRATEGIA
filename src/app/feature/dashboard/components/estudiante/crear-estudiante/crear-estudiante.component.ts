import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EstudianteService } from '../shared/service/estudiante.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  public estudianteForm: FormGroup;

  constructor(protected service: EstudianteService, private fb: FormBuilder, private navegacion: Router) { }

  ngOnInit(): void {

    this.estudianteForm = this.fb.group({
      nombre: ['', Validators.required ],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      repitente: [false],
      contrasena: ['1234123']
    })
  }


  public crearEstudiante() {
    console.log(this. estudianteForm.value);
    this.service.crear(this. estudianteForm.value).subscribe(
      () => {
        Swal.fire({
          title: 'Estudiante  "' + this. estudianteForm.value.nombre + '" Creado',
          icon: 'success',
          confirmButtonText: 'Listo',
        });
        this.navegacion.navigate(['dashboard', 'estudiante','listar']);
      },
      ({ error }) => {
        Swal.fire({
          title: error.mensaje,
          text: this.  estudianteForm.value.nombre,
          icon: 'warning',
          confirmButtonText: 'Listo',
        });
      }
    );
  }
}
